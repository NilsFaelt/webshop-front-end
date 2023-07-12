import React, { FC } from "react";
import { Container, Title } from "./LoginView.style";
import { Login } from "../components";
import { useUser } from "@/src/hooks";

export const LoginView: FC = () => {
  const { data } = useUser();
  console.log(data);
  return (
    <Container>
      <Title>Login</Title>
      <Login />
    </Container>
  );
};
