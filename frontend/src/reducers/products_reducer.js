import { 
  RECEIVE_PRODUCTS, 
  RECEIVE_PRODUCT,  
  RECEIVE_PRODUCT_TYPES
} from "../actions/product_actions";

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCT:
      // debugger;
      return action.product;
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT_TYPES:
      return action.products;
    default:
      return state;
  };
}