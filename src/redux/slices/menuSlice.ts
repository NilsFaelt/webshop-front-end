import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  toogleMenu: boolean;
  toogleSearch: boolean;
  toogleCart: boolean;
}

const initialState: MenuState = {
  toogleMenu: false,
  toogleSearch: false,
  toogleCart: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toogleMenu: (state) => {
      state.toogleMenu = !state.toogleMenu;
      state.toogleCart = false;
      state.toogleSearch = false;
      console.log(state);
    },
    toogleSearch: (state) => {
      state.toogleSearch = !state.toogleSearch;
      state.toogleCart = false;
      state.toogleMenu = false;
    },
    toogleCart: (state) => {
      state.toogleCart = !state.toogleCart;
      state.toogleMenu = false;
      state.toogleSearch = false;
    },
    closeAll: (state) => {
      state.toogleSearch = false;
      state.toogleCart = false;
      state.toogleMenu = false;
      console.log(state);
    },
  },
});

export const { toogleMenu, toogleSearch, toogleCart, closeAll } =
  menuSlice.actions;

export default menuSlice.reducer;
