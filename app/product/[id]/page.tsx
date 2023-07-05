"use client";
import { MainLayout } from "@/src";
import { SingleProductView } from "@/src/features/Product";
import React, { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const Page: FC<Props> = ({ params }) => {
  if (!params.id) return null;
  return (
    <MainLayout>
      <SingleProductView id={params.id} />
    </MainLayout>
  );
};

export default Page;
