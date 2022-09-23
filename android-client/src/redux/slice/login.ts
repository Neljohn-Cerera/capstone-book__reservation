import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    set_loggedin_true: (state) => {
      state.isLoggedIn = true;
    },

    set_loggedin_false: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { set_loggedin_true, set_loggedin_false } = loginSlice.actions;
export default loginSlice.reducer;
