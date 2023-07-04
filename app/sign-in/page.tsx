"use client";
import { MainLayout } from "@/src";
import { LoginView } from "@/src/features/Login";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <LoginView />
    </MainLayout>
  );
};

export default page;
