import React from "react";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Greeting from "./greeting/greeting";

const App = () => (
  <>
  <Switch>
      
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute path='/' component={Greeting} />
  </Switch>

    {/* <GreetingContainer /> */}




  </>
);

export default App;