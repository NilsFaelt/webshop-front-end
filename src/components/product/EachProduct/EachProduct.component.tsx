import React, { FC } from "react";
import {
  Container,
  StyledImage,
  Title,
  StatusText,
  Price,
} from "./EachProduct.style";

import { StyledLink } from "@/src/styles";
import { AddToCart } from "../AddToCart";

interface Props {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  status?: string;
}

export const EachProduct: FC<Props> = ({
  title,
  imageUrl,
  price,
  status,
  id,
}) => {
  return (
    <Container>
      <StyledLink href={`/product/${id}`}>
        <StyledImage
          alt={title ? title : "product"}
          src={imageUrl && imageUrl}
        />
      </StyledLink>
      <AddToCart price={price} title={title} id={id} imageUrl={imageUrl} />
      <Title>{title && title}</Title>
      <Price>€{price?.toFixed(2)} </Price>
      <StatusText>{status && status}</StatusText>
    </Container>
  );
};
