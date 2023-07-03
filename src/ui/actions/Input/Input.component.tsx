import React, { FC } from "react";
import { Container, StyledInput, StyledImage } from "./Input.style";

interface Props {
  placeholder: string;
  type: string;
  inputRef?: any;
}

export const Input: FC<Props> = ({ placeholder, type, inputRef }) => {
  return (
    <Container>
      <StyledImage
        alt='magnifying-glass'
        width={1}
        height={1}
        src='/svg/magnifying-glass.svg'
      />
      <StyledInput ref={inputRef} placeholder={placeholder} type={type} />
    </Container>
  );
};

export default Input;
