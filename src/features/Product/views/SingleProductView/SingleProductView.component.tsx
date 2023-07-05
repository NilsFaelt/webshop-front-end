import React, { FC } from "react";
import { Container } from "./SingleProductView.style";
import { useProduct } from "../../hooks";
import { DetailedProduct } from "@/src/components";

interface Props {
  id: string;
}

export const SingleProductView: FC<Props> = ({ id }) => {
  return (
    <Container>
      <DetailedProduct id={id} />
    </Container>
  );
};
