import React, { ChangeEvent, FC } from "react";
import { Container, StyledInput, StyledImage } from "./Input.style";

interface Props {
  placeholder: string;
  type: string;
  inputRef?: any;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({ placeholder, type, inputRef, setInput }) => {
  return (
    <Container>
      <StyledInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        ref={inputRef}
        placeholder={placeholder}
        type={type}
      />
    </Container>
  );
};

export default Input;
