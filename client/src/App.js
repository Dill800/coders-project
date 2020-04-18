
import React, {useState} from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot/Forgot";
import Quiz from "./views/Quiz/Quiz";
import Dashboard from "./views/Dashboard/Dashboard"
import './assets/bootstrap.min.css';
import Admin from "./views/Admin/Admin";
import Privilege from "./views/Privilege/Privilege";
import List from "./views/List/List";


const tokenManager = require('./tokenManager')

const App = () => {

  const [currUser, setCurrUser] = useState(tokenManager.getCurrentUser())

  return (
    <div>
      <Switch>
        
        <Route
          exact path='/'
          render={(props) => {
            return <Redirect to='/login'/>
          }}
        />

        <Route
          exact path='/login'
          render={(props) => {
            return <Login {...props} setCurrUser={setCurrUser}/>
          }}
        />

        <Route
          exact path='/dashboard'
          render={(props) => {
            return <Dashboard {...props} currUser={currUser} setCurrUser={setCurrUser}/>
          }}
        />

        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgot-password" component={Forgot}/>
        <Route exact path="/quiz" component={Quiz}/>
          {/*For Testing - it is not linked to user */}
        <Route exact path="/privilege" component={Privilege}/>
        <Route exact path="/list" component={List}/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
