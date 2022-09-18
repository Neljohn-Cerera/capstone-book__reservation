import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    set_theme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { set_theme } = themeSlice.actions;
export default themeSlice.reducer;
