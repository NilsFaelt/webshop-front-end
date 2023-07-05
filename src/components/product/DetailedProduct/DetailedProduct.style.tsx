import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  margin-top: 20rem;
  margin-bottom: 10rem;
  gap: 1rem;
`;
export const StyledImage = styled.img`
  width: 60vw;
  height: 80vh;
  object-fit: cover;
  @media (max-width: 500px) {
    height: 60vh;
    width: 100vw;
  }
`;
export const Title = styled.h2``;
export const InfoText = styled.p``;
export const Price = styled.h2``;
