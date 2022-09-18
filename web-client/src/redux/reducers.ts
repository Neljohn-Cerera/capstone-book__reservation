import { combineReducers } from 'redux';
import sidebar from './slice/sideBarSlice';
import category from './slice/categorySlice';
import author from './slice/authorSlice';
import booksAuthors from './slice/booksAuthors';
import booksCategories from './slice/booksCategories';
import bookCart from './slice/bookCart';

export default combineReducers({
  sidebar,
  category,
  author,
  booksAuthors,
  booksCategories,
  bookCart,
});
