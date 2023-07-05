import React, { FC, useState } from "react";
import { AmountContainer, Container, PlusMinusText } from "./AddToCart.style";
import { GenericButton } from "@/src/ui";
import { useDispatch } from "react-redux";
import { addItem } from "@/src/redux/slices";
import { toogleCart } from "@/src/redux/slices";
interface Props {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
}

export const AddToCart: FC<Props> = ({ id, price, title, imageUrl }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const disableButton = total > 0;
  const payLoad = {
    id,
    price,
    total,
    title,
    imageUrl,
  };
  console.log(payLoad);
  const handleAdd = () => {
    setTotal((prev) => prev + 1);
  };
  const handleRemove = () => {
    if (total > 0) setTotal((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    dispatch(addItem(payLoad));
    dispatch(toogleCart());
    setTotal(0);
  };
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
