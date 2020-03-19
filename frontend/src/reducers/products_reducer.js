import { 
  RECEIVE_PRODUCTS, 
  RECEIVE_PRODUCT,  
  RECEIVE_PRODUCT_TYPES
} from "../actions/products_actions";

export default function productsReducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product;
      return newState;
    case RECEIVE_PRODUCTS:
      return action.products.data;
    case RECEIVE_PRODUCT_TYPES:
      return action.products.data;
    default:
      return state;
  };
}