import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProductsReducer from "./products_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductsReducer,
  errors: ErrorsReducer,
});

export default RootReducer;