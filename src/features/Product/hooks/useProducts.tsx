import { ProductType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (
  searchArgs: string = ""
): Promise<ProductType[]> => {
  return fetch(`http://localhost:3000/product?searchArgs=${searchArgs}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProducts = (searchArgs?: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(searchArgs),
  });
};
