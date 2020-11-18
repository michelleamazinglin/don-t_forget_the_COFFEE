import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <>
    <header>
        <Link to="/" className="header-link">
          <img src={window.logoUrl} alt="logo" className="logo" width="150" />
          <p>Don't forget<br></br>the COFFEE</p>
        </Link>
    </header>

    <nav className="greeting-nav">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up for free</Link>
    </nav>
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
