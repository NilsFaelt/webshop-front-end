import React, { FC, useRef } from "react";
import { CloseText, Container, CartText, InfoContainer } from "./Cart.style";

import { useDispatch } from "react-redux";
import { toogleCart } from "@/src/redux/slices";
import { useCloseOnClickOutsideElement } from "@/src/hooks";

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const hanldeDispatch = () => {
    dispatch(toogleCart());
  };
  useCloseOnClickOutsideElement(menuRef, hanldeDispatch);
  return (
    <Container ref={menuRef}>
      <InfoContainer>Free shiping after 100€</InfoContainer>
      <CartText>CART</CartText>
      <CloseText onClick={() => dispatch(toogleCart())}>X</CloseText>
    </Container>
  );
};
