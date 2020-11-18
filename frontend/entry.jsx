import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import {
  signup,
  login,
  logout
} from './actions/session_actions';
//thunk actions not util
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);


  // ReactDOM.render(<h1>Welcome to Don't forget the COFFEE :D💗</h1>, root);
  
  //testing
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  //testing end

});

