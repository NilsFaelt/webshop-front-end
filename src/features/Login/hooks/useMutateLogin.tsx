import { useMutation } from "@tanstack/react-query";

const fetchLogin = async (credentials: {
  email: string;
  password: string;
}): Promise<any> => {
  return fetch(`http://localhost:3000/auth/signin`, {
    method: "POST",
    body: JSON.stringify(credentials),
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

export const useMutateLogin = (credentials: {
  email: string;
  password: string;
}) => {
  console.log(" in hook");
  return useMutation(
    (credentials: { email: string; password: string }) => {
      console.log(credentials);
      return fetchLogin(credentials);
    },
    {
      onSuccess: () => console.log("sucess"),
    }
  );
};
