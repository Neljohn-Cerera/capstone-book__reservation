import { combineReducers } from 'redux';
import bookCart from './slice/bookCart';
import login from './slice/login';
import theme from './slice/theme';
import searchValue from './slice/searchValue';

export default combineReducers({
  bookCart,
  login,
  theme,
  searchValue,
});
