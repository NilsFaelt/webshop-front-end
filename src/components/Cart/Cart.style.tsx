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
export const ItemsContainer = styled(DivFlexedColumn)`
  width: 100%;
  height: 23rem;
  margin-top: 2rem;
  align-items: flex-start;
  overflow: scroll;
`;
export const ButtonContainer = styled(DivFlexedColumn)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-top: 0.05rem solid black;
  background-color: white;
`;
export const InfoContainerCheckout = styled(DivFlexedColumn)`
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  height: 5rem;
  margin-left: 1rem;
  gap: 0.5rem;
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
export const Text = styled.p`
  font-size: calc(0.6rem + 0.2vw);
`;

export const InfoContainer = styled(DivFlexedRow)`
  font-size: 0.8rem;
  margin-top: 4rem;
  height: 2rem;
  width: 100%;
  border-top: solid 0.05rem grey;
  border-bottom: solid 0.05rem grey;
  background-color: ${theme.colors.primary};
`;
