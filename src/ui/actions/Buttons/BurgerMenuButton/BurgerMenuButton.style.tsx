import { DivFlexedColumn } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedColumn)`
  gap: 0.3rem;
  width: calc(2rem + 1.2vw);
  height: auto;
  cursor: pointer;
`;
export const Bar = styled.div`
  width: 100%;
  height: 0.17rem;
  background-color: grey;
  border: 0.05rem solid grey;
  border-radius: 1rem;
`;
