import { useProduct } from "@/src/features/Product/hooks";
import React, { FC, useEffect } from "react";
import { Container, StyledImage, Title } from "./DetailedProduct.style";
import { AddToCart } from "../AddToCart";
import { useDispatch } from "react-redux";
import { closeAll } from "@/src/redux/slices";
interface Props {
  id: string;
}

export const DetailedProduct: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const { data } = useProduct(id);

  useEffect(() => {
    dispatch(closeAll());
  }, []);
  if (!data) return <Title>Loading...</Title>;
  const { title, imageUrl, price } = data.fields;

  return (
    <Container>
      <Title>{title}</Title>
      <StyledImage alt={title} src={imageUrl} />
      <AddToCart price={price} id={id} title={title} imageUrl={imageUrl} />
    </Container>
  );
};
