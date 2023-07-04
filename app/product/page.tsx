"use client";
import { MainLayout } from "@/src";
import { AllProductsView } from "@/src/features/Product";
import React from "react";

const Page = () => {
  return (
    <MainLayout>
      <AllProductsView />
    </MainLayout>
  );
};

export default Page;
