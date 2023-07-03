"use client";
import React, { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const Page: FC<Props> = ({ params }) => {
  console.log(params.id);

  return <div>nils</div>;
};

export default Page;
