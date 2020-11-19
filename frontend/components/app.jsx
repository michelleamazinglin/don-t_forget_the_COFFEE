import React from "react";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Greeting from "./greeting/greeting";
import Main from "./main/main_container";
// we need to do container cuz we need the new props
const App = () => (
  <>
  <Switch>
      <AuthRoute exact path='/' component={Greeting} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path='/main' component={Main} />
  </Switch>

  </>
);

export default App;