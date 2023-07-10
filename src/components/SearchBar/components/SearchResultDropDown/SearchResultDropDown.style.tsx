import { DivFlexedRow } from "@/src/styles";
import { styled } from "styled-components";

export const Container = styled(DivFlexedRow)`
  flex-wrap: wrap;
  width: 100%;
  background-color: white;

  padding-top: 5rem;
  padding-bottom: 20rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
