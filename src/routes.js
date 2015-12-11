import React from 'react';
import {Route} from 'react-router';
import SigninContainer from './containers/SigninContainer';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

/**
 * The React Routes for both the server and the client.
 */
export default (
	<Route component={SigninContainer}>
		<Route component={Header}>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			
		</Route>
	</Route>
);
