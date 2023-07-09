import React, { FC } from "react";
import { Container } from "./SignOut.style";
import { useMutateSignout } from "./hooks/useMutateSignout";

export const SignOut: FC = () => {
  const { mutateAsync } = useMutateSignout();
  const handleClick = async () => {
    await mutateAsync().then(() => {});
  };
  return (
    <Container
      onClick={(e: any) => {
        e.preventDefault();
        handleClick();
      }}
    >
      LOGGOUT
    </Container>
  );
};
