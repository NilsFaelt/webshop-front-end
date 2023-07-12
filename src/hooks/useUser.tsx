import { useQuery } from "@tanstack/react-query";

const fetchUser = async (): Promise<any> => {
  const tokens = await localStorage.getItem("tokens");
  if (!tokens) return null;
  const { access_token } = JSON.parse(tokens);

  console.log("in user", access_token);
  return fetch(`http://localhost:3000/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });
};
