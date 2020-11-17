import React from "react";
import ReactDOM from "react-dom";
import {
  signup,
  signin,
  signout
} from './util/session';
// import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();
  ReactDOM.render(<h1>Welcome to Don't forget the COFFEE :D💗</h1>, root);
  // h1 overrides the root.html.erb thing (REACT is working :))

  //testing
  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; 
});