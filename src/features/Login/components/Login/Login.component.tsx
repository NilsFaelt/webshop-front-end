import React, { FC, useEffect, useRef, useState } from "react";
import { Container, TextContainer, Text, Span } from "./Login.style";
import { GenericButton, Input } from "@/src/ui/actions";
import { isValidEmail } from "@/src/utils";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const emailAndPasswordIsValid = isValidEmail(email) && password.length > 7;
  console.log(emailAndPasswordIsValid);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Container>
      <Input
        value={email}
        setInput={setEmail}
        inputRef={inputRef}
        type='text'
        placeholder='Email'
      />
      <Input
        value={password}
        setInput={setPassword}
        type='password'
        placeholder='Password'
      />
      <GenericButton disabled={!emailAndPasswordIsValid} text='LOGIN' />
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
