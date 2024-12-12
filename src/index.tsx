import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const App = React.lazy(() => import('./App'));
import { store } from './store/store';
import './utils/i18n';

ReactDOM.render(
	<Suspense fallback={<div>Loading...</div>}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</Suspense>,
	document.getElementById('root'),
);
