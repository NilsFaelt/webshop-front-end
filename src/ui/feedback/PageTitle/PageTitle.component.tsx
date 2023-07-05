import React, { FC } from "react";
import { Container } from "./PageTitle.style";

interface Props {
  title: string;
}

export const PageTitle: FC<Props> = ({ title }) => {
  return <Container>{title}</Container>;
};
