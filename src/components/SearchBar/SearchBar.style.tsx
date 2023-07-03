import { DivFlexedRow } from "@/src/styles";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
  opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const Contaienr = styled(DivFlexedRow)`
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 4rem;
  width: 100%;
  height: 4rem;
  background-color: white;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const CloseText = styled.p`
  font-size: 2rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;
