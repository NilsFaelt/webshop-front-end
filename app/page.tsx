"use client";
import { MainLayout } from "@/src";
import { HomeView } from "@/src/features/Home";

export default function Home() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
