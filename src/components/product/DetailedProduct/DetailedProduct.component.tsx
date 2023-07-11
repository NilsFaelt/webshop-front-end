import { useProduct } from "@/src/features/Product/hooks";
import React, { FC, useEffect, useState } from "react";
import {
  Container,
  StyledImage,
  Title,
  InfoContainer,
  ImagesContainerWrapper,
  Underline,
  Price,
  ImagesContainer,
  StyledImageSmall,
  InnerContainer,
} from "./DetailedProduct.style";
import { AddToCart } from "../AddToCart";
import { useDispatch } from "react-redux";
import { closeAll } from "@/src/redux/slices";
import { Text } from "@/src/styles";
import { YouMayAlsoLike } from "../../YouMayAlsoLike";
interface Props {
  id: string;
}

export const DetailedProduct: FC<Props> = ({ id }) => {
  const [bigImageurl, setBigImageurl] = useState<null | string>("");
  const dispatch = useDispatch();
  const { data } = useProduct(id);

  useEffect(() => {
    dispatch(closeAll());
  }, []);
  if (!data) return <Title>Loading...</Title>;
  const { title, imageUrl, price, info, images, category } = data.fields;

  return (
    <Container>
      <InnerContainer>
        <ImagesContainerWrapper>
          <StyledImage alt={title} src={bigImageurl ? bigImageurl : imageUrl} />
          <ImagesContainer>
            {images?.map((each, i) => {
              return (
                <StyledImageSmall
                  onMouseOver={() => setBigImageurl(each)}
                  onMouseOut={() => setBigImageurl(null)}
                  key={i}
                  src={each}
                />
              );
            })}
          </ImagesContainer>
        </ImagesContainerWrapper>
        <InfoContainer>
          <>
            <Title>{title}</Title>
            <Price>{price.toFixed(2)} €</Price>
            <Underline />
            <Text>{info}</Text>
          </>
          <AddToCart price={price} id={id} title={title} imageUrl={imageUrl} />
        </InfoContainer>
      </InnerContainer>
      <YouMayAlsoLike category={category} mainProductId={id} />
    </Container>
  );
};
