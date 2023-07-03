import React, { FC } from "react";
import { Bar, Container } from "./BurgerMenuButton.style";
import { toogleMenu } from "@/src/redux/slices";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

export const BurgerMenuButton: FC = () => {
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);
  const dispatch = useDispatch();
  return (
    <>
      <Container onClick={() => dispatch(toogleMenu())}>
        <Bar />
        <Bar />
        <Bar />
      </Container>
    </>
  );
};
