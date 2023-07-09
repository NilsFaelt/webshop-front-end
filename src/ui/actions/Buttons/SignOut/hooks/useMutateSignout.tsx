import { useMutation } from "@tanstack/react-query";

const fetchSignout = async (): Promise<any> => {
  return fetch(`http://localhost:3000/auth/loggout`, {
    method: "POST",

    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useMutateSignout = () => {
  console.log(" in hook");
  return useMutation(
    () => {
      return fetchSignout();
    },
    {
      onSuccess: () => console.log("sucess"),
    }
  );
};
