import React, { FC, ReactNode, useState } from "react";
import {
  Container,
  ItemContainer,
  InofContainer,
  Price,
  StyledImage,
  Title,
  NavBox,
  ChevronImage,
} from "./Carousel.style";
import { useProductsOnSearch } from "../SearchBar/hooks";
import { StyledLink } from "@/src/styles";
interface Props {
  category?: string;
}

export const Carousel: FC<Props> = ({ category }) => {
  const [indexCount, setindexCount] = useState(0);
  const { data } = useProductsOnSearch();
  if (!data) return null;

  const handleClickRight = () => {
    if (indexCount + 4 > data.length) setindexCount(0);
    if (indexCount < data?.length) setindexCount((prev) => prev + 1);
  };
  const handleClickLeft = () => {
    if (indexCount === 0) setindexCount(data.length - 4);
    if (indexCount > 0) setindexCount((prev) => prev - 1);
  };
  const filtereddata = data?.filter(
    (each, i) =>
      i === indexCount || i === indexCount + 1 || i === indexCount + 2
  );
  console.log(data);
  return (
    <Container>
      <NavBox>
        <ChevronImage
          onClick={() => {
            handleClickLeft();
          }}
          src='/svg/chevron-left.svg'
        />
      </NavBox>
      {filtereddata?.map((each, i) => {
        const id = each.sys.id;
        return (
          <ItemContainer key={i}>
            <StyledLink key={i} href={`/product/${id}`}>
              <StyledImage alt='car' src={each.fields.imageUrl} />
            </StyledLink>
            <InofContainer>
              <Title>{each.fields.title}</Title>
              <Price>{each.fields.price} €</Price>
            </InofContainer>
          </ItemContainer>
        );
      })}
      <NavBox>
        <ChevronImage
          onClick={() => {
            handleClickRight();
          }}
          src='/svg/chevron-right.svg'
        />
      </NavBox>
    </Container>
  );
};

// export const Carousel = <T extends {}>({ items }: Props<T[]>) => {
