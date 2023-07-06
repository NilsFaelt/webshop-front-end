import { DivFlexedRow } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  height: auto;
  padding-top: 5rem;
  padding-bottom: 10rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
