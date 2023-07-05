import React, { FC } from "react";
import {
  Container,
  StyledImage,
  Title,
  StatusText,
  Price,
} from "./EachProduct.style";

interface Props {
  imageUrl: string;
  title: string;
  price: number;
  status?: string;
}

export const EachProduct: FC<Props> = ({ title, imageUrl, price, status }) => {
  return (
    <Container>
      <StyledImage alt={title} src={imageUrl} />
      <Title>{title}</Title>
      <Price>€{price.toFixed(2)} </Price>
      <StatusText>{status}</StatusText>
    </Container>
  );
};
