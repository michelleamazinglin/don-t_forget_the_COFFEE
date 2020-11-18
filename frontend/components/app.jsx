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

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;