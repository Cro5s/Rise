import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from "../../actions/session_actions";
import NavBar from './navbar';
import { fetchCartItems } from '../../actions/cart_item_actions';


const mapStateToProps = state => {
  const cartItems = Object.values(state.cart_items);
  const userId = state.session.user.id || "5e767c7f3e2ba776279b1af0";
  let cartItemsLength;
  cartItems.length === 0 ? (cartItemsLength = 0) 
  : (cartItemsLength = cartItems.length);
  if (state.session.user) {
    return {
      currentUserName: state.session.user.fName,   
      loggedIn: state.session.isAuthenticated,
      cartItemsLength,
      userId
    };
  } else {
    return {
      loggedIn: state.session.isAuthenticated,
      cartItemsLength,
      userId
    };
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);