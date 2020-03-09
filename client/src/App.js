import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect  
} from 'react-router-dom';
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot/Forgot";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [url, setUrl] = useState();
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgot-password" component={Forgot}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;