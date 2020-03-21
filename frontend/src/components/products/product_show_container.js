import { connect } from "react-redux"
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { createCartItem } from "../../actions/cart_item_actions";

const mapStateToProps = (state = {}, ownProps) => {
  // debugger;
  const id = ownProps.match.params.id;

  return {
    product: state.products,
    id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: (id, data) => dispatch(createCartItem(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);