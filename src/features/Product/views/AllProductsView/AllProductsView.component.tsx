import React, { FC } from "react";
import { Container } from "./AllProductsView.style";
import { useProducts } from "../../hooks";

export const AllProductsView: FC = () => {
  const { data } = useProducts();
  console.log(data);
  return <Container>AllProductsView</Container>;
};
