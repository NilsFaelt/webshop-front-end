import React, { FC } from "react";
import {
  Container,
  InfoContainerWrapper,
  StyledImage,
  Title,
  InfoContainer,
  Price,
  RemoveText,
} from "./EachCartItem.style";
import { UpdateAmount } from "./UpdateAmount";
import { useDispatch } from "react-redux";
import { removeItem } from "@/src/redux/slices";

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
  const dispatch = useDispatch();

  return (
    <Container>
      <InfoContainerWrapper>
        <StyledImage src={imageUrl} alt={title} />
        <InfoContainer>
          <Title>{title}</Title>
          <Price>{price} €</Price>
          <UpdateAmount id={id} />
        </InfoContainer>
      </InfoContainerWrapper>
      <RemoveText onClick={() => dispatch(removeItem({ id: id }))}>
        REMOVE
      </RemoveText>
    </Container>
  );
};
