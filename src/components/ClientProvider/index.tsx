import React, { createContext, useContext, useEffect, useState } from 'react';

type ClientContextProps = {
	client: any;
	context: any;
	user: any;
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
					const { loggedInUser: user } = await client.data.get("loggedInUser") as ClientContextProps["user"]
					const context  = await client.instance.context() as ClientContextProps["context"]
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