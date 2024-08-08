"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Box from "./components/Box";
import Image from "next/image";
import shopping from "../../../../public/images/shopping.png";

export default function ShoppingCart() {
  const products = useSelector(
    (state: RootState) => state.shoppingCart.products
  );

  return (
    <main className="h-screen">
      {products.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Image src={shopping} alt="no-product" width={200} height={200} />
          <p className="pt-5 text-lg dark:text-white">سبد خرید خالی است!</p>
        </div>
      ) : (
        <div className="mt-36 flex gap-5 justify-center">
          <div className="h-full flex flex-col gap-3 mb-10">
            {products.map((product) => (
              <Box key={product.id} productId={product.id} />
            ))}
          </div>

          <div className="h-64 w-96 bg-white rounded-xl border-gray-200 border-[1px]"></div>
        </div>
      )}
    </main>
  );
}
