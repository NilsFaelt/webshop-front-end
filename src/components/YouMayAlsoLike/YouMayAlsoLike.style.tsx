import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  gap: 1rem;
`;

export const StyledImage = styled.img`
  width: calc(20rem + 20vw);
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: calc(1rem + 0.4vw);
  margin-top: 0;
`;
export const ProductTitle = styled.h2`
  font-size: calc(0.8rem + 0.4vw);
  margin-top: 0;
`;
