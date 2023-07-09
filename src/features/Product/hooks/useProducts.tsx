import { ProductType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (
  title: string = "",
  category: string = ""
): Promise<ProductType[]> => {
  return fetch(
    `http://localhost:3000/product?searchArgs=${title}&&categorty=${category}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProducts = (title?: string, category?: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(title, category),
  });
};
