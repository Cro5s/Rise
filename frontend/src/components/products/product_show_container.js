import { connect } from "react-redux"
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { 
  createCartItem, 
  updateCartItem
} from "../../actions/cart_item_actions";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state = {}, ownProps) => {
  const id = ownProps.match.params.id;
  const currentUserId = state.session.user.id || "5e767c7f3e2ba776279b1af0";
  const cartItem = state.cartItems || {};

  return {
    product: state.products,
    id,
    currentUserId,
    cartItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: (id, data) => dispatch(createCartItem(id, data)),
    updateCartItem: (id, data) => dispatch(updateCartItem(id, data)),
    login: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);