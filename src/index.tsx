import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from './utils/styles';
import { Provider } from 'react-redux';
import store from './app/store';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<App />
				<Global />
			</ScrollToTop>
		</Router>
	</Provider>
);