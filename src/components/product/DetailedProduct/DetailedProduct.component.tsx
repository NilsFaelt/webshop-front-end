import { useProduct } from "@/src/features/Product/hooks";
import React, { FC } from "react";
import { Container, StyledImage, Title } from "./DetailedProduct.style";
import { AddToCart } from "../AddToCart";

interface Props {
  id: string;
}

export const DetailedProduct: FC<Props> = ({ id }) => {
  const { data } = useProduct(id);
  console.log(data);
  if (!data) return <Title>Loading...</Title>;
  const { title, imageUrl, price } = data.fields;

  return (
    <Container>
      <Title>{title}</Title>
      <StyledImage alt={title} src={imageUrl} />
      <AddToCart price={price} id={id} title={title} />
    </Container>
  );
};
