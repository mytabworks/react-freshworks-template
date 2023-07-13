import React, { createContext, useContext, useEffect, useState } from 'react';

type ClientEvent = {
	helper: {
		getData: () => any;
	}
}

type ClientContextProps = {
	client: {
		interface: {
			trigger: (
				name: 'showModal' | 'showDialog' | 'showConfirm' | 'showNotify' | 'show' 
				| 'hide' | 'enable' | 'disable' | 'click' | 'setOptions' | 'setValue'
				| 'start' | 'stop',
				options: {
					title?: string;
					template?: string;
					type?: 'success' | 'danger' | 'info' | 'warning' | 'alert';
					message?: string;
					saveLabel?: string;
					cancelLabel?: string;
					id?: any;
					value?: any;
					text?: string;
					isPublic?: boolean;
					replace?: boolean;
					position?: string;
					attachments?: any[];
					[prop: string]: any;
				}
			) => Promise<any>;
			[prop: string]: any;
		};
		events: {
			on: (name: string, callback: (event: ClientEvent) => void) => void;
			[prop: string]: any;
		};
		instance: {
			context: () => Promise<ClientContextProps["context"]>;
			get: () => Promise<any>;
			send: (options: {message?: Record<string, any> | string, receiver?: string[]}) => Promise<any>;
			receive: (callback: (event: ClientEvent) => void) => void;
			close: () => void;
			[prop: string]: any;
		};
		data: {
			get: (name: string, ...args: any) => Promise<{loggedInUser: ClientContextProps["user"]}>;
			[prop: string]: any;
		}
		[prop: string]: any;
	} | null;
	context: {
		instanceID: any;
		parentID?: any;
		location: string;
		data?: Record<string, any>;
		modalData?: any;
		[prop: string]: any;
	} | null;
	user: {
		id: number;
		display_name: string;
		email: string;
		mobile_number: string | null;
		work_number: string | null;
		avatar: string | null;
		privileges: string | null;
		job_title: string | null;
		language: string | null;
		abilities: string[];
		uuid: string;
		confirmed: boolean;
		is_active: boolean;
		account_id: string;
		role_id: string;
		plan_name: string;
		signature: string | null;
		from: string;
		created_at: string;
		is_forgotten: boolean;
		[prop: string]: any;
	} | null;
	loading: boolean;
	error: any;
}

const defaultStates = { client: null, context: null, user: null, loading: true, error: null }

const ClientContext = createContext<ClientContextProps>(defaultStates)

export const useClient = () => useContext(ClientContext)

const ClientProvider: React.FunctionComponent = ({children}) => {

	const [states, setStates] = useState<ClientContextProps>(defaultStates)

	useEffect(() => {
		(window as any).app
			.initialized()
			.then(async (client: ClientContextProps["client"]) => {
				try {
					const { loggedInUser: user } = await client!.data.get("loggedInUser")
					const context  = await client!.instance.context()
					setStates(prev => ({...prev, client, context, user, loading: false }))
				  } catch (error: ClientContextProps["error"]) {
					setStates(prev => ({...prev, error, loading: false }))
				  }
			})
			.catch((error: ClientContextProps["error"]) => {
				setStates(prev => ({...prev, error, loading: false }))
			})
	}, [])

	return (
		<ClientContext.Provider value={states}>
            {children}
		</ClientContext.Provider>
	);
}

export default ClientProvider;