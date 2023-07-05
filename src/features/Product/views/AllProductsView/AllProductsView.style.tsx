import { DivFlexedColumn, DivFlexedRow } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  gap: 1rem;
`;
export const ProductsContainer = styled(DivFlexedRow)`
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
