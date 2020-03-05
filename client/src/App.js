import React from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Register" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;