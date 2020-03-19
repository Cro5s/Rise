import { connect } from "react-redux"
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger;
  const id = ownProps.match.params.id;

  return {
    product: state.products[id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);