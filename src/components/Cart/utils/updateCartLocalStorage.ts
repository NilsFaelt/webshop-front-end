import { ProductType } from "@/src/types";

export interface CartState {
  id: string;
  price: number;
  total: number;
  title: string;
  imageUrl: string;
}

export const saveCartToLocalStorage = (cart: CartState[] = []) => {
  localStorage.setItem("myCart", JSON.stringify(cart));
};

export const clearCartFromLocalStorage = () => {
  localStorage.removeItem("myCart");
};
export const getCartFromLocalStorage = () => {
  const value = localStorage.getItem("myCart");
  if (value) {
    const parsedValue = JSON.parse(value);
    return parsedValue;
  }
  return [];
};
