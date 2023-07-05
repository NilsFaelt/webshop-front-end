import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const AmountContainer = styled(DivFlexedRow)`
  justify-self: flex-start;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 0.05rem solid black;
  justify-content: space-between;
  gap: 2rem;
  transform: scale(0.6);
  margin-left: -1.8rem;
`;
export const PlusMinusText = styled.p`
  padding: 0.7rem;
  margin: 0;
  font-size: calc(0.7rem + 0.5vw);
  cursor: pointer;
`;
export const Text = styled.p`
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  font-size: calc(0.7rem + 0.5vw);
`;
