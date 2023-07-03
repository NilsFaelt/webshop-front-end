import React, { FC } from "react";
import { Container, CloseText } from "./Menu.style";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { useDispatch } from "react-redux";
import { toogleMenu } from "@/src/redux/slices";
export const Menu: FC = () => {
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);
  const dispatch = useDispatch();
  return (
    <Container>
      <CloseText onClick={() => dispatch(toogleMenu())}>X</CloseText>
    </Container>
  );
};
