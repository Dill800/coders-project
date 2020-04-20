import React, { useState } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound';
import Forgot from './views/Forgot/Forgot';
import Quiz from './views/Quiz/Quiz';
import './assets/bootstrap.min.css';
import Dashboard from './views/Dashboard/Dashboard';
import Admin from './views/Admin/Admin';
import Users from './views/Users/Users';

const tokenManager = require('./tokenManager');

const App = () => {
	const [currUser, setCurrUser] = useState(tokenManager.getCurrentUser());

	return (
		<div>
			<Switch>
				<Route
					exact
					path='/'
					render={(props) => {
						return <Redirect to='/login' />;
					}}
				/>

				<Route
					exact
					path='/login'
					render={(props) => {
						return <Login {...props} setCurrUser={setCurrUser} />;
					}}
				/>

				<Route
					exact
					path='/dashboard'
					render={(props) => {
						return (
							<Dashboard
								{...props}
								currUser={currUser}
								setCurrUser={setCurrUser}
							/>
						);
					}}
				/>

				<Route exact path='/addAccident' component={Admin} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/forgot-password' component={Forgot} />
				<Route exact path='/quiz' component={Quiz} />
				<Route exact path='/users' component={Users} />

				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
