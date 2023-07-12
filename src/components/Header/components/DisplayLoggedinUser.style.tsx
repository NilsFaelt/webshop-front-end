import { DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  background-color: ${theme.colors.primary};
`;
export const Text = styled.p`
  font-size: 0.5rem;
  margin: 0;
`;
