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
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </div>

    <footer>
        <p>© 2020 Don't forget the COFFEE</p>
        <a href="#">Term</a>
        <a href="#">Privacy</a>
        <a href="#">Sercurity</a>
    </footer>

    </>
  );
  const personalGreeting = () => (
    <div className="header-container">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
