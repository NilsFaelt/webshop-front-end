import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  padding: 1rem;
  z-index: 3;
  gap: 0.25rem;
  width: calc(1rem + 1.2vw);
  height: auto;
  cursor: pointer;
`;
export const Bar = styled.div`
  width: 100%;
  height: 0.17rem;

  background-color: black;
  border: 0.05rem solid grey;
  border-radius: 0.1rem;
`;
