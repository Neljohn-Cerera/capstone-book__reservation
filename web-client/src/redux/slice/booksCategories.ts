import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export const booksCategoriesSlice = createSlice({
  name: 'booksCategories',
  initialState: {
    booksCategories: [] as string[],
  },
  reducers: {
    addBooksCategories: (state, action: PayloadAction<string>) => {
      return produce(state, (draftState) => {
        draftState.booksCategories.push(action.payload);
      });
    },
    removeBooksCategories: (state) => {
      state.booksCategories = [];
    },
  },
});
// export const category = (state: RootState) => state.category.category;
export const { addBooksCategories, removeBooksCategories } =
  booksCategoriesSlice.actions;
export default booksCategoriesSlice.reducer;
