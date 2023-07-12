import React, { FC, useEffect, useRef, useState } from "react";
import { Container, TextContainer, Text, Span } from "./Login.style";
import { GenericButton, Input, SignOut } from "@/src/ui/actions";
import { isValidEmail } from "@/src/utils";
import { useMutateLogin } from "../../hooks/useMutateLogin";
import { useQueryClient } from "@tanstack/react-query";

export const Login: FC = () => {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("nil@gmail.com");
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const emailAndPasswordIsValid = isValidEmail(email) && password.length > 2;
  const { mutateAsync, data } = useMutateLogin({ email, password });

  const handleClick = async () => {
    await mutateAsync({ email, password }).then((res) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    });
  };

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
      <GenericButton
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        disabled={!emailAndPasswordIsValid}
        text='LOGIN'
      />
      <TextContainer>
        <Text>
          Forgot <Span>Password/Username?</Span>
        </Text>
        <Text>
          Create <Span>Account?</Span>
        </Text>
      </TextContainer>
      <SignOut />
    </Container>
  );
};
