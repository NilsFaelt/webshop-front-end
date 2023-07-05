import React, { FC } from "react";
import {
  Container,
  StyledImage,
  Title,
  InfoContainer,
  Price,
} from "./EachCartItem.style";
import { ProductType } from "@/src/types";

interface Props {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  total: number;
}

export const EachCartItem: FC<Props> = ({
  id,
  title,
  price,
  imageUrl,
  total,
}) => {
  return (
    <Container>
      <StyledImage src={imageUrl} alt={title} />
      <InfoContainer>
        <Title>{title}</Title>
        <Price>{price} €</Price>
      </InfoContainer>
    </Container>
  );
};
