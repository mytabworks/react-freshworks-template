import React from 'react'
import reactLogo from '@images/logo.svg'
import { useClient } from '@components/ClientProvider'

const Modal: React.FunctionComponent = () => {
	const { client, user } = useClient()

	const handleCloseModal = (event: React.MouseEvent) => {
		client?.instance.close()
	}

  	return (
		<div style={{textAlign: 'center' }}>
			<h4>Hi {user?.display_name}, Here is your Modal</h4>
            <button type="button" onClick={handleCloseModal}>Close</button>
			<img src={reactLogo} className="App-logo" alt="logo" />
		</div>
	)
}

export default Modal
