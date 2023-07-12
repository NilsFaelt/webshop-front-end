import { useUser } from "@/src/hooks";
import React, { FC } from "react";
import { Container, Text } from "./DisplayLoggedinUser.style";

export const DisplayLoggedinUser: FC = () => {
  const { data } = useUser();
  if (!data) return null;
  return (
    <Container>
      <Text>Loggedin as: {data.email}</Text>
    </Container>
  );
};
