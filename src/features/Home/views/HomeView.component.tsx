import React, { FC } from "react";
import { Container } from "./HomeView.style";
import { ProductDisplayBig } from "@/src/components";

export const HomeView: FC = () => {
  return (
    <Container>
      <ProductDisplayBig textColor='white' />
    </Container>
  );
};
