"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import useGetBySlug from "@/hooks/useGetBySlug";
import { useState } from "react";

const Product = ({ params }: { params: { slug: string } }) => {
  const { addItem, items, removeItem } = useCart();
  const itemData = useGetBySlug(params.slug);
  const item = { ...itemData, count: 1 };
  const itemToAdd = item;

  const [isItemInCart, setIsItemInCart] = useState(
    items.some((item) => item.id === itemToAdd.id)
  );
  

  const addToCart = () => {
    setIsItemInCart(true);
    addItem({ ...item });
  };

  const remove = (id: number) => {
    setIsItemInCart(false);
    removeItem(id);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        key={item.id}
        className="h-72 w-screen flex justify-center lg:justify-normal lg:w-[40rem] xl:w-[50rem] border-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-dark-user rounded-lg"
      >
        <div className="flex pt-14 lg:pr-8">
          <div>
            <Image src={item.pic} width={150} height={150} alt="pic" />
          </div>
          <div className="flex flex-col gap-4 pr-5 pl-5 lg:pl-0">
            <p className="max-w-[30rem] overflow-hidden line-clamp-2 leading-7 text-sm font-bold">
              {item.title}
            </p>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-black"></div>
              <p className="text-gray-500">{item.color}</p>
            </div>
            {!isItemInCart ? (
              <Button
                data-testid="add-to-cart-button"
                className="text-sm font-bold w-36"
                onClick={() => addToCart()}
              >
                افزودن به سبد خرید
              </Button>
            ) : (
              <Button
                variant="outline"
                className="text-sm font-bold w-36"
                onClick={() => remove(item.id)}
              >
                حذف از سبد خرید
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
