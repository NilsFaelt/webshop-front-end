import React, { FC } from "react";
import { Container } from "./SignOut.style";
import { useMutateSignout } from "./hooks/useMutateSignout";
import { useQueryClient } from "@tanstack/react-query";

export const SignOut: FC = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutateSignout();
  const handleClick = async () => {
    await mutateAsync().then(() => {
      localStorage.removeItem("tokens");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    });
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
