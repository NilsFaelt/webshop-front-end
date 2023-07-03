import React, { FC } from "react";
import { Container } from "./GenericButton.style";

interface Props {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const GenericButton: FC<Props> = ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};
