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

export const LoginView: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Container>
      <Title>Login</Title>
      <LoginContainer>
        <Input
          setInput={setEmail}
          inputRef={inputRef}
          type='text'
          placeholder='Email'
        />
        <Input setInput={setPassword} type='password' placeholder='Password' />
        <GenericButton text='LOGIN' />
        <TextContainer>
          <Text>
            Forgot <Span>Password/Username?</Span>
          </Text>
          <Text>
            Create <Span>Account?</Span>
          </Text>
        </TextContainer>
      </LoginContainer>
    </Container>
  );
};
