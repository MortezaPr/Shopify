"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Box from "./components/Box";
import Image from "next/image";
import shopping from "../../../../public/images/shopping.png";
import { Button } from "@mui/material";

export default function ShoppingCart() {
  const products = useSelector(
    (state: RootState) => state.shoppingCart.products
  );

  const totalPrice = products.reduce((total, product) => {
    console.log(total, product.price, product.count);
    return total + product.price * product.count;
  }, 0);

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
              <Box key={product.id} productId={product.id} price={product.price} />
            ))}
          </div>

          <div className="flex flex-col items-center h-48 w-96 bg-white rounded-xl border-gray-200 border-[1px]">
            <div className="flex flex-col gap-10 pt-10">
              <div className="text-lg flex gap-7 font-bold">
                <span>جمع سبد خرید:</span>
                <span>{totalPrice.toLocaleString("fa")} تومان</span>
              </div>
              <Button variant="contained" color="primary">
                پرداخت
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
