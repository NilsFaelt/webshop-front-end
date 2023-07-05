import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  margin-bottom: 10rem;
  gap: 1rem;
`;
export const StyledImage = styled.img`
  width: calc(20rem + 30vw);
  height: 80vh;
  object-fit: cover;
  @media (max-width: 900px) {
    height: 60vh;
    width: 100vw;
  }
`;
export const Title = styled.h2``;
export const InfoText = styled.p``;
export const Price = styled.h2``;
