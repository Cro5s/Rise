import { connect } from 'react-redux';
import { fetchProducts, fetchProductTypes } from '../../actions/product_actions';
import ProductIndex from './products_index';

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  const product_type = ownProps.match.params.product_type;
  const products = Object.values(state.products);
  let something = false;
  if (products.length === 10) {
    something = true;
  }
  return {
    products,
    category,
    product_type,
    something
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