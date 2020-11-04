import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { UsernameContextProvider } from "./userContext"

ReactDOM.render(
	<UsernameContextProvider>
		<App />
	</UsernameContextProvider>,
	document.getElementById('root')
);
