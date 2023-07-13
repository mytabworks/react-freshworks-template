import React from 'react';

const Layout: React.FunctionComponent = ({children}) => {

	return (
		<div className="fw-widget-wrapper">
            {children}
		</div>
	);
}

export default Layout;