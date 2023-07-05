import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTotalMinus, updateTotalPlus } from "@/src/redux/slices";
import { AmountContainer, PlusMinusText } from "./UpdateAmount.style";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

interface Props {
  id: string;
}

export const UpdateAmount: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    state.cart.find((each) => {
      if (each.id === id) {
        return each;
      }
      return;
    })
  );

  return (
    <AmountContainer>
      <PlusMinusText onClick={() => dispatch(updateTotalMinus({ id: id }))}>
        -
      </PlusMinusText>
      {product?.total}
      <PlusMinusText onClick={() => dispatch(updateTotalPlus({ id: id }))}>
        +
      </PlusMinusText>
    </AmountContainer>
  );
};
