import { DivFlexedColumn, DivFlexedRow, theme } from "@/src/styles";
import { keyframes, styled } from "styled-components";
import Link from "next/link";

const slideIn = keyframes`
  from {
    margin-left:-30rem;
  }
  to {
    margin-left:0rem;
  }
`;
const slideOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled(DivFlexedColumn)`
  align-self: center;
  border-bottom: 0.05rem solid black;
  width: 80%;
`;
export const TextContainer = styled(DivFlexedRow)`
  align-self: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;
export const Text = styled.p``;
export const InnerLink = styled(Link)`
  width: 80%;
  animation: ${slideIn} 0.5s ease-in-out;
  margin-left: 1rem;
  margin: 0.5rem;
  align-self: flex-start;
  color: grey;
  text-decoration: none;
  font-size: 0.8rem;
  &:hover {
    text-decoration: underline;
    transition: 0.2s;
    color: black;
  }
`;
