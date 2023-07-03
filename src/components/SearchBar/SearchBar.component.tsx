import React, { FC, useEffect, useRef } from "react";
import { CloseText, Contaienr } from "./SearchBar.style";
import { useDispatch } from "react-redux";
import { toogleSearch } from "@/src/redux/slices";
import { Input } from "@/src/ui/actions";

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Contaienr>
      <Input placeholder='Search...' type='text' inputRef={inputRef} />
      <CloseText onClick={() => dispatch(toogleSearch())}>X</CloseText>
    </Contaienr>
  );
};
