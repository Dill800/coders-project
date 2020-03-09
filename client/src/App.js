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
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" render={() => <Landing/>}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Forgot" component={Forgot}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;