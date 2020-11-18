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
      <Link to="/" className="header-link">
        <h1>Don't forget the COFFEE</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;