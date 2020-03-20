import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import CartPage from './cart_page';

const mapStateToProps = (state, ownProps) => {
    const user_id = ownProps.match.params.user_id;
    const cart_items = Object.values(state.cart_items);

    return {
        cart_items
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