import { ProductType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (title: string = ""): Promise<ProductType[]> => {
  return fetch(`http://localhost:3000/product?title=${title}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProductsOnSearch = (title?: string) => {
  return useQuery({
    queryKey: ["productsOnSearch"],
    queryFn: () => fetchProducts(title),
  });
};
