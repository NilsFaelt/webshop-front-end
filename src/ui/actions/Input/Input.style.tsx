import { DivFlexedRow } from "@/src/styles";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  height: 3rem;
  gap: 1rem;
  margin-left: 1.7rem;
  width: 100%;
`;
export const StyledInput = styled.input`
  height: 2rem;
  width: 100%;
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const StyledImage = styled(Image)`
  width: calc(1rem + 1.5vw);
  height: auto;
`;
