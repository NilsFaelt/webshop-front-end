import React, { FC, useRef } from "react";
import { Container, CloseText } from "./Menu.style";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { useDispatch } from "react-redux";
import { toogleMenu } from "@/src/redux/slices";
import { useCloseOnClickOutsideElement } from "@/src/hooks";

export const Menu: FC = () => {
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const hanldeDispatch = () => {
    dispatch(toogleMenu());
  };
  useCloseOnClickOutsideElement(menuRef, hanldeDispatch);
  return (
    <Container ref={menuRef}>
      <CloseText onClick={() => dispatch(toogleMenu())}>X</CloseText>
    </Container>
  );
};
