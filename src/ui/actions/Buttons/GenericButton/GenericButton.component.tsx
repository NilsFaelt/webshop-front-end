import React, { FC } from "react";
import { Container, ContainerDisabled } from "./GenericButton.style";

interface Props {
  disabled?: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const GenericButton: FC<Props> = ({
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <>
      {disabled ? (
        <ContainerDisabled disabled={true}>{text}</ContainerDisabled>
      ) : (
        <Container disabled={true} onClick={onClick}>
          {text}
        </Container>
      )}
    </>
  );
};
