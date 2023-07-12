import { keyframes, styled } from "styled-components";
import { DivFlexedColumn } from "@/src/styles";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled(DivFlexedColumn)<{ $imageurl: string }>`
  align-items: flex-start;
  box-sizing: border-box;
  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  width: 100%;
  height: 80vh;
  animation: ${fadeIn} 1s ease-in;
`;

export const TextContainer = styled(DivFlexedColumn)`
  color: ${(props) => props.color};
  align-items: flex-start;
  gap: 2rem;
`;
export const MainText = styled.h2`
  margin: 0;
  font-size: calc(0.8rem + 0.5vw);
`;
export const UnderText = styled.p`
  margin: 0;
  font-size: calc(0.7rem + 0.5vw);
`;
export const InfoText = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  width: clamp(15rem, 40%, 50rem);
  box-sizing: border-box;
`;
