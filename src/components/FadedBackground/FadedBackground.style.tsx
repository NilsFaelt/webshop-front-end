import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: 500px) {
    opacity: 0;
  }
`;
