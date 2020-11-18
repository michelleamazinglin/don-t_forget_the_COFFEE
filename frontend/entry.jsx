import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import {
  signup,
  signin,
  signout
} from './util/session';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);


  // ReactDOM.render(<h1>Welcome to Don't forget the COFFEE :D💗</h1>, root);
  

  //testing
  // window.signup = signup;
  // window.signin = signin;
  // window.signout = signout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; 
  //testing end

});

