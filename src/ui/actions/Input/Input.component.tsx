import React, { ChangeEvent, FC } from "react";
import { Container, StyledInput, StyledImage } from "./Input.style";

interface Props {
  placeholder: string;
  type: string;
  value: string;
  inputRef?: any;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  placeholder,
  type,
  inputRef,
  setInput,
  value,
}) => {
  return (
    <Container>
      <StyledInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Container>
  );
};

export default Input;
