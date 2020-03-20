import { connect } from "react-redux"
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state = {}, ownProps) => {
  // debugger;
  const id = ownProps.match.params.id;

  return {
    product: state.products,
    id,
  };
};

// const mapStateToProps = (state, ownProps) => {
//   // const id = ownProps.match.params.id;
//   debugger;
//   return {
//     product: state.product,
//     id: "5e73039a1c9d440000ade78e",
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);