import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  justify-content: space-between;
  height: 5rem;
  margin-top: 1rem;

  width: 100%;
`;
export const InfoContainer = styled(DivFlexedColumn)`
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  height: 5rem;
  margin-left: 1rem;
  gap: 0.5rem;
`;
export const InfoContainerWrapper = styled(DivFlexedRow)``;
export const Title = styled.h2`
  font-size: calc(0.8rem + 0.1vw);
  margin: 0;
`;
export const Price = styled.h2`
  margin: 0;
  font-size: calc(0.7rem + 0.1vw);
  color: black;
`;
export const RemoveText = styled.h2`
  margin: 0;
  font-size: calc(0.8rem + 0.1vw);
  color: black;
  text-decoration: underline;
  cursor: pointer;

  margin-right: 1rem;
`;
export const StyledImage = styled.img`
  height: 5rem;
  width: 5rem;
  margin-left: 1rem;
`;
