import { useProdctsByCategory } from "@/src/features/Product/hooks";
import React, { FC } from "react";
import {
  Container,
  StyledImage,
  Title,
  ProductTitle,
} from "./YouMayAlsoLike.style";

import { StyledLink, Text } from "@/src/styles";

interface Props {
  category: string[];
  mainProductId: string;
}

export const YouMayAlsoLike: FC<Props> = ({ category, mainProductId }) => {
  const { data } = useProdctsByCategory(category ? category : []);
  console.log(data);
  const uniqueProduct = data?.find((each) => each.sys.id !== mainProductId);
  if (!uniqueProduct) return null;

  const { imageUrl, title } = uniqueProduct?.fields;
  const { id } = uniqueProduct?.sys;
  return (
    <Container>
      <Title>YOU MAY ALSO LIKE</Title>
      <StyledLink href={`/product/${id}`}>
        <StyledImage src={imageUrl} alt={title} />
      </StyledLink>
      <ProductTitle>{title}</ProductTitle>
    </Container>
  );
};
