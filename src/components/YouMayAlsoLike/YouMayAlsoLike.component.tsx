import { useProdctsByCategory } from "@/src/features/Product/hooks";
import React, { FC } from "react";

export const YouMayAlsoLike: FC = () => {
  const { data } = useProdctsByCategory(["food"]);
  console.log(data, " may like");
  return <div>YouMayAlsoLike</div>;
};
