import * as CartApiUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const receiveCartItems = cartItems => {
  return {
    type: RECEIVE_CART_ITEMS,
    cartItems
  }
};

export const receiveCartItem = cartItems => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItems
  }
};

export const removeCartItem = cartItemId => {
  return {
    type: REMOVE_CART_ITEM,
    cartItemId
  };
};

export const fetchCartItems = userId => dispatch => (
    CartApiUtil.fetchCartItems(userId)
    .then(res => dispatch(receiveCartItems(res.data)))
    .catch(err => console.log(err))
);

export const updateCartItem = (id, data) => dispatch => (
    CartApiUtil.updateCartItem(id, data)
    .then(res => dispatch(receiveCartItems(res.data)))
    .catch(err => console.log(err))
);

export const createCartItem = (id, data) => dispatch => (
    CartApiUtil.createCartItem(id, data)
    .then(res => dispatch(receiveCartItems(res.data)))
    .catch(err => console.log(err))
);

export const deleteCartItem = id=> dispatch => (
    CartApiUtil.deleteCartItem(id)
    .then(() => dispatch(removeCartItem(id)))
    .catch(err => console.log(err))
);