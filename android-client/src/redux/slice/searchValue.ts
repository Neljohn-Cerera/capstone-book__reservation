import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searhcValueSlice = createSlice({
  name: 'searhcValue',
  initialState: {
    searchValue: '',
  },
  reducers: {
    set_searchValue: (
      state,
      action: PayloadAction<{ searchValue: string }>
    ) => {
      state.searchValue = action.payload.searchValue;
    },
    set_reset_searchValue: (state) => {
      state.searchValue = '';
    },
  },
});

export const { set_searchValue, set_reset_searchValue } =
  searhcValueSlice.actions;
export default searhcValueSlice.reducer;
