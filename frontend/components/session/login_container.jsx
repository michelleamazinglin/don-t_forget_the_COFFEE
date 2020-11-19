import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({errors}) => {
  // debugger;
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
