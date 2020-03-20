import { getProducts, getProductTypes, getProduct } from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT_TYPES = "RECEIVE_PRODUCT_TYPES";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
};

export const receiveProductTypes = products => {
  return {
    type: RECEIVE_PRODUCT_TYPES,
    products
  }
};

export const receiveProduct = product => {

  return {
    type: RECEIVE_PRODUCT,
    product
  };
};

export const fetchProducts = category => dispatch => (
  getProducts(category)
    .then(res => dispatch(receiveProducts(res.data)))
    .catch(err => console.log(err))
);

export const fetchProductTypes = (category, productType) => dispatch => (
  getProductTypes(category, productType)
    .then(res => dispatch(receiveProductTypes(res.data)))
    .catch(err => console.log(err))
);

export const fetchProduct = id => dispatch => {
  getProduct(id)
  .then(res => {
    // debugger;
      dispatch(receiveProduct(res.data))
    })
    .catch(err => console.log(err))
};