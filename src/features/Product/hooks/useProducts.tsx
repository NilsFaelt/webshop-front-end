import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  return fetch(`http://localhost:3000/product`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
