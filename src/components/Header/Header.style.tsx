import { DivFlexedRow } from "@/src/styles";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  border-bottom: 0rem solid grey;
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    border-bottom: 0.05rem solid grey;
    background-color: rgba(255, 255, 255, 0.8);
    transition: 1s;
  }
  &:not(:hover) {
    border-bottom: 0rem solid grey;
    background-color: rgba(255, 255, 255, 0);
    transition: 1s;
  }
`;

export const ImageAndLoginWrapper = styled(DivFlexedRow)`
  gap: 1rem;
`;

export const StyledImage = styled(Image)`
  width: calc(2rem + 1vw);
  height: auto;
`;
