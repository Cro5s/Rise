import { connect } from 'react-redux';
import { fetchProducts, fetchProductTypes } from '../../actions/product_actions';
import ProductIndex from './products_index';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  let products = Object.values(state.products);
  if (products.length === 2) {
    products.shift();
    products.shift();
  }

  return {
    products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (category) => dispatch(fetchProducts(category)),
    fetchProductTypes: (category, productType) => dispatch(fetchProductTypes(category, productType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);