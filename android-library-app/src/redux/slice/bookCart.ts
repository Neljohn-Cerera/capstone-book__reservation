import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export const bookCartSlice = createSlice({
  name: 'bookCart',
  initialState: {
    bookCart: [] as any,
  },
  reducers: {
    addBookToCart: (
      state,
      action: PayloadAction<{ id: number; title: string; userId: number }>
    ) => {
      return produce(state, (draftState) => {
        draftState.bookCart.push(action.payload);
      });
    },
    resetCart: (state) => {
      state.bookCart = [];
    },
    removeBookFromCart: (state, action: PayloadAction<{ title: string }>) => {
      return produce(state, (draft) => {
        const index = draft.bookCart.findIndex(
          (val: { title: string }) => val.title === action.payload.title
        );
        if (index !== -1) draft.bookCart.splice(index, 1);
      });
    },
  },
});
// export const category = (state: RootState) => state.category.category;
export const { addBookToCart, removeBookFromCart, resetCart } =
  bookCartSlice.actions;
export default bookCartSlice.reducer;
