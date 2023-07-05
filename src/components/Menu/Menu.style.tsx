import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";

import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    margin-left:-30rem;
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

export const Container = styled.nav`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: calc(20rem + 10vw);
  height: calc(100vh);
  background-color: white;
  border-right: 0.05rem solid grey;
  animation: ${slideIn} 0.5s ease-in-out;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const NavContainer = styled(DivFlexedColumn)`
  margin-top: 8rem;
  align-self: center;
  justify-self: center;
`;
export const CloseText = styled.p`
  position: absolute;
  z-index: 3;
  font-size: 2rem;
  margin-left: 1.5rem;
  margin-top: 0.9rem;
  cursor: pointer;
`;
