import React, {useState} from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot/Forgot";

import 'bootstrap/dist/css/bootstrap.min.css';

const tokenManager = require('./tokenManager')

const App = () => {

  const [currUser, setCurrUser] = useState(tokenManager.getCurrentUser())

  return (
    <div>
      <Switch>
        
        <Route
          exact path='/Home'
          render={(props) => {
            return <Home {...props} currUser={currUser} setCurrUser={setCurrUser}/>
          }}
        />
        
        <Route
          exact path='/'
          render={(props) => {
            return <Landing {...props} setCurrUser={setCurrUser}/>
          }}
        />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgot-password" component={Forgot}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;