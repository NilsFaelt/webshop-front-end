"use client";
import { MainLayout } from "@/src";
import { ProductDisplayBig } from "@/src/components";

export default function Home() {
  return (
    <MainLayout>
      <ProductDisplayBig
        mainText='GREEN FOOD'
        underText='Test our new menu'
        infoText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus enim provident iusto esse impedit voluptas vitae optio molestiae at tempora nihil cumque corporis laudantium debitis dolorum fugit voluptatum repudiandae!'
        imageUrl='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      />
    </MainLayout>
  );
}
