import Link from "next/link";
import { styled } from "styled-components";
import { theme } from "./ThemeStyles";

export const DivFlexedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DivFlexedColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const Text = styled.p`
  color: black;
  font-size: calc(0.5rem + 0.5vw);
`;
export const Price = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  color: ${theme.colors.primary};
`;
