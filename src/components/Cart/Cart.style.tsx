import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";

import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    margin-right:-30rem;
  }
  to {
    margin-left:0rem;
  }
`;
const slideOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled(DivFlexedColumn)`
  justify-content: flex-start;
  position: fixed;
  z-index: 4;
  top: 0;
  right: 0;
  width: calc(20rem + 10vw);
  height: 100vh;
  background-color: white;
  border-left: 0.05rem solid grey;
  animation: ${slideIn} 0.5s ease-in-out;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const CloseText = styled.p`
  position: absolute;
  z-index: 3;
  font-size: 2rem;
  right: 1.5rem;
  top: -1rem;
  cursor: pointer;
`;

export const CartText = styled.p`
  position: absolute;
  z-index: 3;
  font-size: calc(0.7rem + 0.7vw);
  left: 1.5rem;
  top: 0rem;
`;

export const InfoContainer = styled(DivFlexedRow)`
  font-size: 0.8rem;
  margin-top: 4.4rem;
  height: 2rem;
  width: 100%;
  border-top: solid 0.05rem grey;
  border-bottom: solid 0.05rem grey;
  background-color: ${theme.colors.primary};
`;
