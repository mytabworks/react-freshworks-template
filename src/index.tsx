import React from 'react';
import ReactDOM from 'react-dom';
import Application from '@app/index';
import ClientProvider from '@components/ClientProvider';
import '@styles/main.scss';


ReactDOM.render(
	<React.StrictMode>
		<ClientProvider>
			<Application />
		</ClientProvider>
	</React.StrictMode>,
  document.getElementById('root')
);
