import React, { FC } from "react";
import { Container } from "./HomeView.style";
import { Carousel, ProductDisplayBig } from "@/src/components";

export const HomeView: FC = () => {
  return (
    <Container>
      <ProductDisplayBig textColor='white' />
      <Carousel />
    </Container>
  );
};
