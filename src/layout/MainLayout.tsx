import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.style";
import { Header } from "../components";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
