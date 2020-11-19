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



class Greeting extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
      return(
    <>
    <header className="header">
        <Link to="/" className="header-link">
          <img src={window.logoUrl} alt="logo" className="logo" width="150" />
          <p>Don't forget<br></br>the COFFEE</p>
        </Link>
        <nav className="greeting-nav">
          <Link to="/login">Log in</Link>
          <Link id="sign-up-button" to="/signup"><button className="greeting-signup-button">Sign up for free</button></Link>
        </nav>
    </header>


    <footer>
        <p>© 2020 Don't forget the COFFEE by Michelle Lin</p>
        <div className="footer-icon">
          <a href="https://github.com/michelleamazinglin"><img src={githubUrl} alt="Github" width="20" /></a>
          <a href="https://www.linkedin.com/in/michelle-lin-9b9b8614b/"><img src={linkedinUrl} alt="Linkedin" width="20" /></a>
        </div>
    </footer>

    </>
      );
  };
  // 
  //   <div className="header-container">
  //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //     <p>this is the main page</p>
  //   </div>
  // 

};


export default Greeting;
