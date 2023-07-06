"use client";
import React, { FC, useEffect, useRef } from "react";
import {
  CloseText,
  Container,
  CartText,
  InfoContainer,
  ItemsContainer,
  ButtonContainer,
  InfoContainerCheckout,
  Text,
} from "./Cart.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toogleCart, updateCartFromLocalStorage } from "@/src/redux/slices";
import { useCloseOnClickOutsideElement } from "@/src/hooks";
import { RootState } from "@/src/redux";
import { EachCartItem } from "./components";
import { GenericButton } from "@/src/ui";
import { calculateTotalPrice } from "./utils/calculateTotalPrice";
import { getCartFromLocalStorage } from "./utils";

export const Cart: FC = () => {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const hanldeDispatch = () => {
    dispatch(toogleCart());
  };
  const localStoredCart = getCartFromLocalStorage();
  const totalPrice = calculateTotalPrice(items);

  useEffect(() => {
    if (items.length < 1) {
      dispatch(updateCartFromLocalStorage(localStoredCart));
      console.log(localStoredCart, "local cart");
    }
  }, []);

  useCloseOnClickOutsideElement(menuRef, hanldeDispatch);
  return (
    <Container ref={menuRef}>
      <InfoContainer>Free shiping after 100€</InfoContainer>
      <CartText>CART</CartText>
      <CloseText onClick={() => dispatch(toogleCart())}>X</CloseText>
      <ItemsContainer>
        {items?.map((each) => (
          <EachCartItem
            key={each.id}
            id={each.id}
            title={each.title}
            price={each.price}
            imageUrl={each.imageUrl}
            total={each.total}
          />
        ))}
      </ItemsContainer>
      <ButtonContainer>
        <InfoContainerCheckout>
          <Text>Free Shipping after 100€</Text>
        </InfoContainerCheckout>
        <GenericButton text={`CHECKOUT • ${totalPrice} €`} />
      </ButtonContainer>
    </Container>
  );
};
