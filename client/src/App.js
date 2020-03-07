import React from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot/Forgot";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Landing}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Forgot" component={Forgot}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;