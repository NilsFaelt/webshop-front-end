import { ProductType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (
  id: string,
  main: "true" | "false" = "false"
): Promise<ProductType> => {
  return fetch(`http://localhost:3000/product/${id}?main=${main}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProduct = (id: string, main?: "true" | "false") => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(id, main),
  });
};
