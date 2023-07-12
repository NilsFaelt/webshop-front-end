"use client";
import { MainLayout } from "@/src";
import { AboutView } from "@/src/features/About";

import React from "react";

const page = () => {
  return (
    <MainLayout>
      <AboutView />
    </MainLayout>
  );
};

export default page;
