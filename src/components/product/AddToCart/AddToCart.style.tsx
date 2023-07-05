import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)``;
export const AmountContainer = styled(DivFlexedRow)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0.05rem solid black;
  justify-content: space-between;
  gap: 2rem;
`;
export const PlusMinusText = styled.p`
  padding: 1rem;
  margin: 0;
  font-size: calc(0.7rem + 1vw);
  cursor: pointer;
`;
export const Text = styled.p`
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  font-size: calc(0.7rem + 1vw);
`;
