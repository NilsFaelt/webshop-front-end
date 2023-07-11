import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";
import Image from "next/image";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  postion: fixed;
  bottom: 0;
  margin-top: 10rem;
  width: 100%;
  min-height: 10rem;
  border-top: solid 0.05rem black;
  padding-bottom: 3rem;
`;
export const InnerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  margin-top: 1rem;
  align-items: flex-start;
  gap: 1rem;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PaymnetInfoContainer = styled(DivFlexedRow)`
  margin-top: 2rem;
  gap: 1rem;
`;
export const InfoContainer = styled(DivFlexedColumn)`
  justify-self: center;
  align-items: center;
  @media (max-width: 400px) {
    width: 100%;
    justify-self: center;
    align-items: center;
  }
`;
export const Title = styled.h4`
  font-size: calc(0.6rem + 0.2vw);
  color: ${theme.colors.primary};
`;
export const Text = styled.p`
  text-align: center;
  font-size: calc(0.4rem + 0.2vw);
  color: grey;
`;

export const StyledImage = styled(Image)`
  width: calc(1.5rem + 1.2vw);
  height: auto;
`;
