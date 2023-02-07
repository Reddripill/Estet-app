import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from './utils/styles';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<Router>
			<App />
			<Global />
		</Router>
	</Provider>
);