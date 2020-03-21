import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import CartPage from './cart_page';

const mapStateToProps = (state, ownProps) => {
    debugger;
    const userId = ownProps.match.params.user_id;
    const cartItems = state.cart_items || [];

    return {
        userId,
        cartItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);