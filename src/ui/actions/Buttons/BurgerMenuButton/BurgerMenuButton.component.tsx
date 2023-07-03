import React, { FC } from "react";
import { Bar, Container } from "./BurgerMenuButton.style";
import { toogleMenu } from "@/src/redux/slices";
import { useDispatch } from "react-redux";

export const BurgerMenuButton: FC = () => {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(toogleMenu())}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  );
};
