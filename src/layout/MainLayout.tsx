import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { Cart, Header, Menu } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);
  const cartActive = useSelector((state: RootState) => state.menu.toogleCart);
  return (
    <Container>
      {menuActive && <Menu />}
      {cartActive && <Cart />}
      <Header />
      {children}
    </Container>
  );
};
