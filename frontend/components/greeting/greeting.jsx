import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

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

    <div className="greeting-page-pics" >
      <p>The smart to-do app for busy people.</p>
      <Link id="sign-up-button" to="/signup"><button className="greeting-signup-button-1">Sign up for free</button></Link>
      <div className="michelle-andrew-say">       
        <p><img src={window.andrewUrl} />pick up the COFFEE tomorrow.</p>
        <p><img src={window.michelleUrl} />bring MiuMiu to vet at 5pm on Monday.</p>
      </div>
      <img src={window.mainPageShoppingUrl} alt="shopping"/>
    </div>

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

};


export default Greeting;
