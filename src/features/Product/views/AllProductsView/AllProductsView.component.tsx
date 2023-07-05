import React, { FC } from "react";
import { Container, ProductsContainer } from "./AllProductsView.style";
import { useProducts } from "../../hooks";
import { PageTitle } from "@/src/ui";
import { EachProduct } from "@/src/components";

export const AllProductsView: FC = () => {
  const { data } = useProducts();

  return (
    <Container>
      <PageTitle title='OUR PRODUCTS' />
      <ProductsContainer>{<RenderedProducts />}</ProductsContainer>
    </Container>
  );
};
export const RenderedProducts: FC = () => {
  const { data } = useProducts();
  console.log(data);

  return (
    <>
      {data?.map((each: any) => {
        return (
          <EachProduct
            id={each.sys.id}
            key={each.fields.title}
            title={each.fields.title}
            imageUrl={each.fields.imageUrl}
            price={each.fields.price}
            status={each.fields.status}
          />
        );
      })}
    </>
  );
};
