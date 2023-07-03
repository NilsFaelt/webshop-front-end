import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";
import Link from "next/link";

export const Container = styled(DivFlexedColumn)`
  align-items: center;
`;
export const Title = styled.h1`
  font-size: calc(0.8rem + 0.5vw);
  margin: 0;
`;
export const UnderTitle = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  margin: 0;
`;
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
