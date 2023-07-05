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
    addItem: (state, action: PayloadAction<CartState>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.total += newItem.total;
      } else {
        state.push(newItem);
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {},
    clearCart: (state) => {},
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
