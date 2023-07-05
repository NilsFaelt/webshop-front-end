import { DivFlexedColumn, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  position: relative;
  margin-top: 1rem;
  flex: 1;
  max-width: 15rem;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const StyledImage = styled.img`
  height: 10rem;
  object-fit: cover;
  @media (max-width: 500px) {
    width: 100vw;
    height: 15rem;
  }
`;
export const Title = styled.h2`
  margin-bottom: 0;
  font-size: calc(0.7rem + 0.5vw);
`;
export const InfoText = styled.p`
  font-size: calc(0.5rem + 0.5vw);
`;
export const Price = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  color: ${theme.colors.primary};
`;
export const StatusText = styled.p`
  left: 0.7rem;
  top: 0rem;
  position: absolute;
  font-size: calc(0.5rem + 0.5vw);
  color: ${theme.colors.primary};
  background-color: white;
  padding: clamp(0.4rem, 0.5vw, 0.7rem);
  @media (max-width: 500px) {
    left: -7rem;
  }
  @media (max-width: 400px) {
    left: -4rem;
  }
`;
