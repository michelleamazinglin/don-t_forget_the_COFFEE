import React from "react";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <>
  <div>

    <GreetingContainer />

  </div>

  </>
);

export default App;