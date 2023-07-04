import { DivFlexedColumn, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  border: 0.05rem solid black;
  border-radius: 0rem;
  background-color: white;
  gap: 1rem;
  padding: 4rem;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  margin-top: 3rem;
  font-size: calc(0.8rem + 0.8vw);
  color: white;
`;
export const Text = styled.p`
  text-align: center;
  font-size: calc(0.6rem + 0.4vw);
  color: black;
`;
export const Span = styled.span`
  cursor: pointer;
  font-size: calc(0.6rem + 0.4vw);
  color: ${theme.colors.primary};
`;
