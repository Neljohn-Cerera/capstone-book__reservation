import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: [] as string[],
  },
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      return produce(state, (draftState) => {
        draftState.category.push(action.payload);
      });
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      return produce(state, (draft) => {
        const index = draft.category.findIndex((val) => val === action.payload);
        if (index !== -1) draft.category.splice(index, 1);
      });
    },
    updateCategory: (
      state,
      action: PayloadAction<{
        value: string;
        newValue: string;
      }>
    ) => {
      return produce(state, (draft) => {
        const index = draft.category.findIndex(
          (val) => val === action.payload.value
        );
        if (index !== -1) draft.category[index] = action.payload.newValue;
      });
    },
  },
});
// export const category = (state: RootState) => state.category.category;
export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
