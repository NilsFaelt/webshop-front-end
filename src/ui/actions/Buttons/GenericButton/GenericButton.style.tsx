import { theme } from "@/src/styles";
import { keyframes, styled } from "styled-components";

const fillBackground = keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
    
  }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.05rem solid black;
  min-width: calc(10rem + 2vw);
  height: 3rem;
  padding-left: 4vw;
  padding-right: 4vw;
  font-size: calc(0.5rem + 0.2vw);
  cursor: pointer;
  color: black;
  background-image: linear-gradient(
    to right,
    ${theme.colors.primary},
    ${theme.colors.primary}
  );
  background-size: 0% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  transition: background-size 0.3s ease-in;
  &:hover {
    animation: ${fillBackground} 0.3s ease-in;
    background-size: 100% 100%;
  }
`;
export const ContainerDisabled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.05rem solid black;
  min-width: calc(10rem + 2vw);
  height: 3rem;
  padding-left: 4vw;
  padding-right: 4vw;
  font-size: calc(0.5rem + 0.2vw);
  color: grey;
`;
