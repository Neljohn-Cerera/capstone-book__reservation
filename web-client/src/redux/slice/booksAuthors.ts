import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export const booksAuthorsSlice = createSlice({
  name: 'booksAuthors',
  initialState: {
    booksAuthors: [] as string[],
  },
  reducers: {
    addBooksAuthors: (state, action: PayloadAction<string>) => {
      return produce(state, (draftState) => {
        draftState.booksAuthors.push(action.payload);
      });
    },
    removeBooksAuthors: (state) => {
      state.booksAuthors = [];
    },
  },
});
// export const category = (state: RootState) => state.category.category;
export const { addBooksAuthors, removeBooksAuthors } =
  booksAuthorsSlice.actions;
export default booksAuthorsSlice.reducer;
