import React, { FC } from "react";
import { Container, ImageAndLoginWrapper } from "./Header.style";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { useDispatch } from "react-redux";

import {
  BurgerMenuButton,
  CartButton,
  MainTitle,
  SearchButton,
} from "@/src/ui";
import { SearchBar } from "../SearchBar";

export const Header: FC = () => {
  const searchBarActive = useSelector(
    (state: RootState) => state.menu.toogleSearch
  );
  const dispatch = useDispatch();
  return (
    <Container>
      {searchBarActive && <SearchBar />}
      <BurgerMenuButton />
      <MainTitle />
      <ImageAndLoginWrapper>
        <SearchButton />
        <CartButton />
      </ImageAndLoginWrapper>
    </Container>
  );
};
