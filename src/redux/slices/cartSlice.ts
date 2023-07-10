import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  id: string;
  price: number;
  total: number;
  title: string;
  imageUrl: string;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartFromLocalStorage: (state, action: PayloadAction<CartState[]>) => {
      return (state = action.payload);
    },
    addItem: (state, action: PayloadAction<CartState>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.total += newItem.total;
        localStorage.setItem("myCart", JSON.stringify(state));
      } else {
        state.push(newItem);
        localStorage.setItem("myCart", JSON.stringify(state));
      }
      return state;
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const updatedState = state.filter(
        (each) => each.id !== action.payload.id
      );
      localStorage.setItem("myCart", JSON.stringify(updatedState));
      return updatedState;
    },
    updateTotalPlus: (state, action: PayloadAction<{ id: string }>) => {
      const updatedState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, total: item.total + 1 };
        }
        return item;
      });
      localStorage.setItem("myCart", JSON.stringify(updatedState));
      return updatedState;
    },
    updateTotalMinus: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.find((each) => each.id === action.payload.id);

      if (item?.total === 1) {
        const updatedState = state.filter(
          (each) => each.id !== action.payload.id
        );
        localStorage.setItem("myCart", JSON.stringify(updatedState));
        return updatedState;
      }
      const updatedState = state.map((item) => {
        if (item.id === action.payload.id && item.total > 0) {
          return { ...item, total: item.total - 1 };
        }
        return item;
      });
      localStorage.setItem("myCart", JSON.stringify(updatedState));
      return updatedState;
    },
    clearCart: () => [],
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  updateTotalMinus,
  updateTotalPlus,
  updateCartFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
