import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from "../../actions/session_actions";
import NavBar from './navbar';

const mapStateToProps = state => {
   if (state.session.user) {
    return {
      currentUserName: state.session.user.fName,   
      currentUser: state.session.user,
      loggedIn: state.session.isAuthenticated
    };
  } else {
    return {
      currentUser: state.session.user,
      loggedIn: state.session.isAuthenticated
    };
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);