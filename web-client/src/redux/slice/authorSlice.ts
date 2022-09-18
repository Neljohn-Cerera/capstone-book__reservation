import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    author: [] as string[],
  },
  reducers: {
    addAuthor: (state, action: PayloadAction<string>) => {
      return produce(state, (draftState) => {
        draftState.author.push(action.payload);
      });
    },
    removeAuthor: (state, action: PayloadAction<string>) => {
      return produce(state, (draft) => {
        const index = draft.author.findIndex((val) => val === action.payload);
        if (index !== -1) draft.author.splice(index, 1);
      });
    },
    updateAuthor: (
      state,
      action: PayloadAction<{
        value: string;
        newValue: string;
      }>
    ) => {
      return produce(state, (draft) => {
        const index = draft.author.findIndex(
          (val) => val === action.payload.value
        );
        if (index !== -1) draft.author[index] = action.payload.newValue;
      });
    },
  },
});
// export const category = (state: RootState) => state.category.category;
export const { addAuthor, removeAuthor, updateAuthor } = authorSlice.actions;
export default authorSlice.reducer;
