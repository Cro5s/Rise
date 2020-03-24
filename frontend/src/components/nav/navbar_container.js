import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from "../../actions/session_actions";
import NavBar from './navbar';

const mapStateToProps = state => {
  
  const cartItems = state.cart_items;
  const loggedIn = state.session.isAuthenticated;

   if (state.session.user) {
    return {
      currentUserName: state.session.user.fName,   
      loggedIn,
      cartItems
    };
  } else {
    return {
      loggedIn,
      cartItems
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