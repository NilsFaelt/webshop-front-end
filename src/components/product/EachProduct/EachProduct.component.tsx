import React, { FC } from "react";
import {
  Container,
  StyledImage,
  Title,
  StatusText,
  Price,
} from "./EachProduct.style";

import { StyledLink } from "@/src/styles";

interface Props {
  imageUrl: string;
  title: string;
  price: number;
  status?: string;
  id: string;
}

export const EachProduct: FC<Props> = ({
  title,
  imageUrl,
  price,
  status,
  id,
}) => {
  return (
    <StyledLink href={`product/${id}`}>
      <Container>
        <StyledImage
          alt={title ? title : "product"}
          src={imageUrl && imageUrl}
        />
        <Title>{title && title}</Title>
        <Price>€{price?.toFixed(2)} </Price>
        <StatusText>{status && status}</StatusText>
      </Container>
    </StyledLink>
  );
};
