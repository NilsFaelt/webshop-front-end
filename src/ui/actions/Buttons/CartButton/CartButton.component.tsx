import React, { FC } from "react";
import { Container } from "./CartButton.style";
import { toogleCart } from "@/src/redux/slices";
import { useDispatch } from "react-redux";

export const CartButton: FC = () => {
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => dispatch(toogleCart())}
      alt='cart'
      src={"/svg/cart.svg"}
      width={1}
      height={1}
    />
  );
};
