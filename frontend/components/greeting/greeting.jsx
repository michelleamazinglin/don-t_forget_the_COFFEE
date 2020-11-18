import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from '../session/signup_container';
import LogInFormContainer from '../session/login_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <>
    <header>
        <Link to="/" className="header-link">
          <img src={window.logoUrl} alt="logo" className="logo" width="150" />
          <p>Don't forget<br></br>the COFFEE</p>
        </Link>
        <nav className="greeting-nav">
          <Link to="/login">Log in</Link>
          <Link id="sign-up-button" to="/signup">Sign up for free</Link>
        </nav>
    </header>

    <div className="login-signup-page">
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>

    <footer>
        <p>© 2020 Don't forget the COFFEE</p>
        <div className="footer-icon">
          <a href="https://www.linkedin.com/in/michelle-lin-9b9b8614b/">Linkedin</a>
          <a href="https://github.com/michelleamazinglin">Github</a>
        </div>
    </footer>

    </>
  );
  const personalGreeting = () => (
    <div className="header-container">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
      <p>this is the main page</p>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
