import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  gap: 1rem;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const ItemContainer = styled(DivFlexedColumn)`
  width: calc(8rem + 8vw);
  height: auto;
  align-items: flex-start;
  @media (max-width: 500px) {
    height: 10rem;
  }
`;
export const InofContainer = styled(DivFlexedColumn)`
  align-items: flex-start;
  @media (max-width: 500px) {
    height: 10rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  font-size: calc(0.5rem + 0.5vw);
  padding-left: 0.5rem;
`;
export const Price = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  color: ${theme.colors.primary};
  padding-left: 0.5rem;
  margin-top: 0.2rem;
`;

export const NavBox = styled.div`
  margin-bottom: 0;
  cursor: pointer;
`;
export const ChevronImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 2rem;
`;
