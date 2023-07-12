import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  margin-top: 5rem;
  margin-bottom: 10rem;
  gap: 1rem;
  align-items: center;
`;
export const InnerContainer = styled(DivFlexedRow)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 1rem;
  align-items: flex-start;
  border-bottom: 0.05rem solid black;
  padding-bottom: 4rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InfoContainer = styled(DivFlexedColumn)`
  align-items: flex-start;
  justify-content: space-between;
  max-width: 20rem;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ImagesContainerWrapper = styled(DivFlexedColumn)`
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
export const ImagesContainer = styled(DivFlexedRow)`
  margin-top: 1rem;
  align-items: flex-start;

  width: 100%;
`;
export const StyledImage = styled.img`
  width: calc(20rem + 20vw);
  object-fit: cover;

  @media (max-width: 900px) {
    height: 60vh;
    width: 100vw;
  }
`;
export const StyledImageSmall = styled.img`
  width: calc(5rem + 5vw);
  object-fit: cover;
`;

export const Price = styled.p`
  font-size: calc(0.8rem + 0.4vw);
  color: ${theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: calc(0.8rem + 0.4vw);
  margin-top: 0;
`;

export const Underline = styled.hr`
  width: 100%;
  @media (max-width: 900px) {
    margin-bottom: 0rem;
  }
`;
