import { getProducts, getProductTypes, getProduct } from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT_TYPES = "RECEIVE_PRODUCT_TYPES";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProductTypes = products => ({
    type: RECEIVE_PRODUCT_TYPES,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

export const fetchProducts = category => dispatch => (
    getProducts(category)
        .then(products => dispatch(receiveProducts(products)))
        .catch(err => console.log(err))
);

export const fetchProductTypes = (category, productType) => dispatch => (
    getProductTypes(category, productType)
        .then(products => dispatch(receiveProductTypes(products)))
        .catch(err => console.log(err))
);

export const fetchProduct = id => dispatch => (
    getProduct(id)
        .then(product => dispatch(receiveProduct(product)))
        .catch(err => console.log(err))
);