import { DivFlexedColumn, theme } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  background-image: url("https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-position: center;
`;
export const LoginContainer = styled.form`
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
