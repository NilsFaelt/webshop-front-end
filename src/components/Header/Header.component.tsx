import React, { FC } from "react";
import { Container, ImageAndLoginWrapper } from "./Header.style";

import {
  BurgerMenuButton,
  CartButton,
  MainTitle,
  SearchButton,
} from "@/src/ui";

export const Header: FC = () => {
  return (
    <Container>
      <BurgerMenuButton />
      <MainTitle />
      <ImageAndLoginWrapper>
        <SearchButton />
        <CartButton />
      </ImageAndLoginWrapper>
    </Container>
  );
};
