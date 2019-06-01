import { combineReducers } from 'redux';
import paymentMethod from './paymentMethod/reducer';
import auth from './auth/reducer';
import test from './test/reducer';

export default combineReducers({
  test,
  auth,
  paymentMethod,
});
