import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isSideBarOpen: false,
  },
  reducers: {
    setOpenSideBar: (state) => {
      state.isSideBarOpen = true;
    },
    setCloseSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});
export const isSideBarOpen = (state: RootState) => state.sidebar.isSideBarOpen;
export const { setOpenSideBar, setCloseSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
