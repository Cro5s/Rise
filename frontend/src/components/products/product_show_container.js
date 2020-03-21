import { connect } from "react-redux"
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { 
  createCartItem, 
  updateCartItem 
} from "../../actions/cart_item_actions";

const mapStateToProps = (state = {}, ownProps) => {
  // debugger;
  const id = ownProps.match.params.id;
  const currentUser = state.session.user._id || {};
  const cartItem = state.cartItems || {};

  return {
    product: state.products,
    id,
    currentUser,
    cartItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: (id, data) => dispatch(createCartItem(id, data)),
    updateCartItem: (id, data) => dispatch(updateCartItem(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);