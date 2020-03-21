import axios from "axios";

//Cart show page
export const fetchCartItems = userId => {
  return axios.get(`/api/cart_items/users/${userId}/cart_items`);
}

export const updateCartItem = (id, data) => {
  return axios.put(`/api/cart_items/cart_items/${id}`, data);
}

export const createCartItem = (id, data) => {
  return axios.post(`/api/cart_items/cart_items/${id}`, data);
}

export const deleteCartItem = id => {
  return axios.delete(`/api/cart_items/cart_items/${id}`);
}