import { useProduct } from "@/src/features/Product/hooks";
import React, { FC } from "react";
import { Container, StyledImage, Title } from "./DetailedProduct.style";

interface Props {
  id: string;
}

export const DetailedProduct: FC<Props> = ({ id }) => {
  const { data } = useProduct(id);
  console.log(data);
  if (!data) return <Title>Loading...</Title>;
  const { title, imageUrl } = data;

  return (
    <Container>
      <Title>{title}</Title>
      <StyledImage alt={title} src={imageUrl} />
    </Container>
  );
};
