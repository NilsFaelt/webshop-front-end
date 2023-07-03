import React, { FC } from "react";
import { Container } from "./SearchButton.style";
import { toogleSearch } from "@/src/redux/slices";
import { useDispatch } from "react-redux";

export const SearchButton: FC = () => {
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => dispatch(toogleSearch())}
      alt='magnifying glass'
      src={"/svg/magnifying-glass.svg"}
      width={1}
      height={1}
    ></Container>
  );
};
