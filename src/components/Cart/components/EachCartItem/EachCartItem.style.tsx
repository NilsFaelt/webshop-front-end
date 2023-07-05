import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  height: 5rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const InfoContainer = styled(DivFlexedColumn)`
  justify-content: flex-start;
  align-items: flex-start;
  height: 5rem;
  margin-left: 1rem;
  gap: 0.5rem;
`;
export const Title = styled.h2`
  font-size: calc(0.8rem + 0.1vw);
  margin: 0;
`;
export const Price = styled.h2`
  margin: 0;
  font-size: calc(0.8rem + 0.1vw);
  color: grey;
`;
export const StyledImage = styled.img`
  height: 5rem;
  width: 5rem;
`;
