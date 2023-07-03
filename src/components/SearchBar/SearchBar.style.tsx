import { DivFlexedRow } from "@/src/styles";
import { styled } from "styled-components";

export const Contaienr = styled(DivFlexedRow)`
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 4rem;
  width: 100%;
  height: 4rem;
  background-color: white;
`;

export const CloseText = styled.p`
  font-size: 2rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;
