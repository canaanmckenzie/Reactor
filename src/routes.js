import React from 'react';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Home from './container/Home';
import App from './container/App';

export default (
	<Router history={hashHistory}>
	       <Route path="/" component={App}>
               		<IndexRoute component={Home}/>
               </Route>
	</Router>
	); 
