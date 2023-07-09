import React, { FC } from "react";
import { Container, Title } from "./LoginView.style";
import { Login } from "../components";

export const LoginView: FC = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Login />
    </Container>
  );
};
