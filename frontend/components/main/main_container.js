import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
