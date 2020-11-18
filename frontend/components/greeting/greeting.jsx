import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header">
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up for free</Link>
    </nav>
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
