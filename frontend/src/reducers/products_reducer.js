import { 
  RECEIVE_PRODUCTS, 
  RECEIVE_PRODUCT,  
  RECEIVE_PRODUCT_TYPES
} from "../actions/product_actions";

export default function (state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      newState[action.product.data.id] = action.product.data;
      return newState;
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT_TYPES:
      return action.products;
    default:
      return state;
  };
}