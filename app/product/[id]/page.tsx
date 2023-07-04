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
  return (
    <MainLayout>
      <SingleProductView />
    </MainLayout>
  );
};

export default Page;
