import React from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import NotFound from "./views/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Landing}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;