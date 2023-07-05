import React, { FC, useState } from "react";
import {
  AmountContainer,
  Container,
  PlusMinusText,
  Text,
} from "./AddToCart.style";
import { GenericButton } from "@/src/ui";

interface Props {
  id: string;
  price: number;
  title: string;
}

export const AddToCart: FC<Props> = ({ id, price, title }) => {
  const [total, setTotal] = useState(0);
  const disableButton = total > 0;
  const handleAdd = () => {
    setTotal((prev) => prev + 1);
  };
  const handleRemove = () => {
    if (total > 0) setTotal((prev) => prev - 1);
  };
  const handleAddToCart = () => {};
  return (
    <Container>
      <AmountContainer>
        <PlusMinusText onClick={() => handleRemove()}>-</PlusMinusText>
        {total}
        <PlusMinusText onClick={() => handleAdd()}>+</PlusMinusText>
      </AmountContainer>

      <GenericButton
        disabled={!disableButton}
        text='ADD'
        onClick={handleAddToCart}
      />
    </Container>
  );
};
