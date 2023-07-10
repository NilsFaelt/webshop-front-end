import { ProductType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (category: string[]): Promise<ProductType[]> => {
  return fetch(`http://localhost:3000/product?category=${category}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProdctsByCategory = (category: string[]) => {
  return useQuery({
    queryKey: ["products", "category"],
    queryFn: () => fetchProducts(category),
  });
};
