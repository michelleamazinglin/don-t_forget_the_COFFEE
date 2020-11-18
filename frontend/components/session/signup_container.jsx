import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import Signup from './signup';


//doesnt rely on state

const mapDispatchToProps = dispatch => ({

  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Signup);
