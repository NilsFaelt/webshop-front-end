import React, { FC, useEffect, useRef, useState } from "react";
import { CloseText, Container, InnerContainer } from "./SearchBar.style";
import { useDispatch } from "react-redux";
import { toogleSearch } from "@/src/redux/slices";
import { Input } from "@/src/ui/actions";
import { SearchResultDropDown } from "./components";
import { useDebounce } from "./utils/useDebounce";
import { useProductsOnSearch } from "./hooks";

export const SearchBar: FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const debounceValue = useDebounce(searchInput, 1000);
  const { refetch, data } = useProductsOnSearch(debounceValue.value);
  const activateDropDown = data?.[0];

  useEffect(() => {
    refetch();
  }, [debounceValue]);
  return (
    <Container>
      <InnerContainer>
        <Input
          setInput={setSearchInput}
          value={searchInput}
          placeholder='Search...'
          type='text'
          inputRef={inputRef}
        />
        <CloseText onClick={() => dispatch(toogleSearch())}>X</CloseText>
      </InnerContainer>
      {activateDropDown && <SearchResultDropDown />}
    </Container>
  );
};
