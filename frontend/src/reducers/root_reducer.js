import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProductsRecducer from "./session_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductsRecducer,
  errors: ErrorsReducer,
});

export default RootReducer;