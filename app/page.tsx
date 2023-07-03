"use client";
import { MainLayout } from "@/src";
import { ProductDisplayBig } from "@/src/components";

export default function Home() {
  return (
    <MainLayout>
      <ProductDisplayBig
        textColor='white'
        mainText='GREEN FOOD'
        underText='Test our new menu'
        infoText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, natus enim provident iusto esse impedit voluptas vitae optio molestiae at tempora nihil cumque corporis laudantium debitis dolorum fugit voluptatum repudiandae!'
        imageUrl='https://images.unsplash.com/photo-1564077439888-928a90061fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />
    </MainLayout>
  );
}
