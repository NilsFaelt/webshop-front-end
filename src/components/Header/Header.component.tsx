import React, { FC } from "react";
import { Container, ImageAndLoginWrapper } from "./Header.style";
import { RootState } from "@/src/redux";
import { useDispatch, useSelector } from "react-redux";

import {
  BurgerMenuButton,
  CartButton,
  MainTitle,
  SearchButton,
} from "@/src/ui";
import { SearchBar } from "../SearchBar";
import { useUser } from "@/src/hooks";
import { DisplayLoggedinUser } from "./components";

export const Header: FC = () => {
  const { data } = useUser();
  console.log(data, " in header");
  const searchBarActive = useSelector(
    (state: RootState) => state.menu.toogleSearch
  );
  const dispatch = useDispatch();
  return (
    <Container>
      <DisplayLoggedinUser />
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
