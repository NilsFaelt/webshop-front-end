import { useMutation } from "@tanstack/react-query";

const fetchLogin = async (credentials: {
  email: string;
  password: string;
}): Promise<any> => {
  return fetch(`http://localhost:3000/auth/signin`, {
    method: "POST",
    body: JSON.stringify(credentials),
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
  return useMutation(
    (credentials: { email: string; password: string }) => {
      return fetchLogin(credentials);
    },
    {
      onSuccess: (res) => {
        localStorage.setItem("tokens", JSON.stringify(res));
      },
    }
  );
};
