import React, { FC, useRef } from "react";
import { Container, CloseText, NavContainer } from "./Menu.style";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { useDispatch } from "react-redux";
import { toogleMenu } from "@/src/redux/slices";
import { useCloseOnClickOutsideElement } from "@/src/hooks";
import { EachNav } from "./EachNav";

export const Menu: FC = () => {
  const dispatch = useDispatch();
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);

  const menuRef = useRef(null);
  const hanldeDispatch = () => {
    dispatch(toogleMenu());
  };

  const navOneLinks = [
    { name: "Sign in", url: "sign-in" },
    { name: "Sign out", url: "sign-out" },
  ];
  const navTwoLinks = [
    { name: "Sign in", url: "sign-in" },
    { name: "Sign out", url: "sign-in" },
  ];
  const navThreeLinks = [
    { name: "Sign in", url: "sign-in" },
    { name: "Sign out", url: "sign-in" },
  ];
  useCloseOnClickOutsideElement(menuRef, hanldeDispatch);
  return (
    <Container ref={menuRef}>
      <CloseText onClick={() => dispatch(toogleMenu())}>X</CloseText>
      <NavContainer>
        <EachNav innerLink={navOneLinks} text='Login' />
        <EachNav innerLink={navTwoLinks} text='About' />
        <EachNav innerLink={navThreeLinks} text='Shop' />
      </NavContainer>
    </Container>
  );
};
