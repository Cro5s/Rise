import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProductsReducer from "./products_reducer";
import CartItemsReducer from "./cart_items_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductsReducer,
  cart_items: CartItemsReducer,
  errors: ErrorsReducer,
});

export default RootReducer;