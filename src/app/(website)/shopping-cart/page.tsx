"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Box from "./components/Box";
import Image from "next/image";
import shopping from "../../../../public/images/shopping.png";
import { Button } from "@mui/material";
import Link from "next/link";

export default function ShoppingCart() {
  const products = useSelector(
    (state: RootState) => state.shoppingCart.products
  );

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="h-screen">
      {products.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Image src={shopping} alt="no-product" width={200} height={200} />
          <p className="pt-5 text-lg dark:text-white">سبد خرید خالی است!</p>
        </div>
      ) : (
        <div className="mt-36 flex flex-col gl:flex-row gap-5 justify-center">
          <div className="h-full flex flex-col gap-3 mb-36 gl:mb-10">
            {products.map((product) => (
              <Box
                key={product.id}
                productId={product.id}
                price={product.price}
              />
            ))}
          </div>

          <Link
            href={`/submit-purchase`}
            className="gl:hidden flex flex-col items-center h-32 w-full bg-white rounded-t-xl border-gray-200 border-[1px] fixed bottom-0"
          >
            <div className="flex gap-10 pt-10">
              <div className="flex flex-col gap-3 font-bold">
                <span>جمع سبد خرید:</span>
                <span>{totalPrice.toLocaleString("fa")} تومان</span>
              </div>
              <div className="w-40 xs:w-48">
                <Button fullWidth variant="contained" color="primary">
                  تایید و تکمیل سفارش
                </Button>
              </div>
            </div>
          </Link>

          <div className="hidden gl:flex flex-col items-center h-48 gl:w-80 gx:w-96 bg-white rounded-xl border-gray-200 border-[1px]">
            <div className="flex flex-col gap-10 pt-10">
              <div className="gx:text-lg flex justify-center gap-7 font-bold">
                <span>جمع سبد خرید:</span>
                <span>{totalPrice.toLocaleString("fa")} تومان</span>
              </div>
              <div className="gl:w-72 gx:w-80">
                <Link href={`/submit-purchase`}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ height: "3rem" }}
                  >
                    <p className="font-bold">تایید و تکمیل سفارش</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
