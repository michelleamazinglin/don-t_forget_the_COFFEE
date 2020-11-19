import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({

  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
