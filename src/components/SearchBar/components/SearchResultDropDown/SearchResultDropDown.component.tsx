import React, { FC } from "react";
import { Container } from "./SearchResultDropDown.style";
import { useProductsOnSearch } from "../../hooks";
import { EachProduct } from "@/src/components/Product";
import { useDispatch } from "react-redux";
import { toogleMenu } from "@/src/redux/slices";

export const SearchResultDropDown: FC = () => {
  const { data } = useProductsOnSearch();

  return (
    <Container>
      {data?.map((each) => {
        return (
          <EachProduct
            imageUrl={each.fields.imageUrl}
            title={each.fields.title}
            key={each.fields.id}
            price={each.fields.price}
            id={each.sys.id}
          />
        );
      })}
    </Container>
  );
};
