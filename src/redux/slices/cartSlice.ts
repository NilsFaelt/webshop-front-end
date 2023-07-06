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
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      console.log(action.payload.id);
      return state.filter((each) => each.id !== action.payload.id);
    },
    updateTotalPlus: (state, action: PayloadAction<{ id: string }>) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, total: item.total + 1 };
        }
        return item;
      });
    },
    updateTotalMinus: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.find((each) => each.id === action.payload.id);
      console.log(item);
      if (item?.total === 1) {
        return state.filter((each) => each.id !== action.payload.id);
      }
      return state.map((item) => {
        if (item.id === action.payload.id && item.total > 0) {
          return { ...item, total: item.total - 1 };
        }
        return item;
      });
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
} = cartSlice.actions;

export default cartSlice.reducer;
