import { connect } from 'react-redux';
import { fetchProducts, fetchProductTypes } from '../../actions/product_actions';
import ProductIndex from './products_index';

const mapStateToProps = (state, ownProps) => {
  debugger;
  const category= ownProps.match.params.category;
  let products = Object.values(state.products);

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