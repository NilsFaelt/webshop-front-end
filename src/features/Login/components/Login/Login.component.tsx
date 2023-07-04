import React, { FC, useEffect, useRef, useState } from "react";
import { Container, TextContainer, Text, Span } from "./Login.style";
import { GenericButton, Input } from "@/src/ui/actions";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Container>
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
    </Container>
  );
};
