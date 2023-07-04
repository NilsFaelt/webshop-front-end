import React, { FC, useEffect, useRef, useState } from "react";
import {
  Container,
  LoginContainer,
  TextContainer,
  Title,
  Text,
  Span,
} from "./LoginView.style";
import { GenericButton, Input } from "@/src/ui/actions";
import { Login } from "../components";

export const LoginView: FC = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Login />
    </Container>
  );
};
