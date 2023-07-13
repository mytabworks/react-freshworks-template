import React from 'react'
import reactLogo from '@images/logo.svg'
import icon from '@images/icon.svg'
import { useClient } from '@components/ClientProvider'
import branding from '@config/branding'

const MainView: React.FunctionComponent = () => {
	const { client, user } = useClient()

	const handleClickModal = (event: React.MouseEvent) => {
		client?.interface.trigger(
			'showModal',
			{
				title: 'Modal',
				template: branding.landingPath
			}
		)
	}

	const handleClickNotify = (event: React.MouseEvent) => {
		client?.interface.trigger(
			'showNotify',
			{
				type: "success",
				message: 'sample notification',
			}
		)
	}

	const handleClickConfirm = (event: React.MouseEvent) => {
		client?.interface.trigger(
			'showConfirm',
			{
				title: 'Sample Confirm',
				message: 'Are you sure',
			}
		)
	}

  	return (
		<div>
			<img src={icon} className="App-logo" alt="logo" />
			<img src={reactLogo} className="App-logo" alt="logo" />
			<h3>Hi {user?.display_name},</h3>
			<p>Welcome to your first react app in Freshdesk</p>
			<button type="button" onClick={handleClickModal}>Show Modal</button>
			<button type="button" onClick={handleClickConfirm}>Show Confirm</button>
			<button type="button" onClick={handleClickNotify}>Show Notify</button>
		</div>
	)
}

export default MainView
