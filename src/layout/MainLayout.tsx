import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { Header, Menu } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const menuActive = useSelector((state: RootState) => state.menu.toogleMenu);
  return (
    <Container>
      {menuActive && <Menu />}
      <Header />
      {children}
    </Container>
  );
};
