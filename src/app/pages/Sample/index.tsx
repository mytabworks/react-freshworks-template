import React from 'react'
import reactLogo from '@images/logo.svg'
import icon from '@images/icon.svg'
import { useClient } from '@components/ClientProvider'

const HelloUser: React.FunctionComponent = () => {
	const { client, user } = useClient()

  return (
		<div>
			<img src={icon} className="App-logo" alt="logo" />
			<img src={reactLogo} className="App-logo" alt="logo" />
			<h3>Hi {user.display_name},</h3>
			<p>Welcome to your first react app in Freshdesk</p>
		</div>
	)
}

export default HelloUser
