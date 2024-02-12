"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import useGetBySlug from "@/hooks/useGetBySlug";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import useLikedItems from "@/hooks/useLikedItems";

const Product = ({ params }: { params: { slug: string } }) => {
  const { addItem, items, removeItem } = useCart();
  const { likes, addLikedItem, removeLikedItem } = useLikedItems();
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

  const isLiked = (id: number) => {
    return likes.includes(id);
  };

  const handleLike = (id: number) => {
    console.log("sad");
    if (likes.includes(id)) {
      removeLikedItem(id);
    } else {
      addLikedItem(id);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        key={item.id}
        className="h-72 w-screen flex justify-center lg:justify-normal lg:w-[40rem] xl:w-[50rem] border-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-dark-user rounded-lg"
      >
        <div className="flex pt-14 lg:pr-8">
          <div>
            <Image
              src={item.pic ?? "/path/to/fallback-image.jpg"}
              width={150}
              height={150}
              alt="pic"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 pr-5 pl-5 lg:pl-0">
            <p className="max-w-[30rem] overflow-hidden line-clamp-2 leading-7 text-sm font-bold">
              {item.title}
            </p>
            <div></div>
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-black"></div>
              <p className="text-gray-500">{item.color}</p>
            </div>
            <div className="flex items-center justify-between">
              <div
                onClick={() => handleLike(item.id)}
                className="cursor-pointer"
              >
                {isLiked(item.id) ? (
                  <div className="text-[#ef3a4f]">
                    <FaHeart size={22} />
                  </div>
                ) : (
                  <FaRegHeart size={22} />
                )}
              </div>
              {!isItemInCart ? (
                <Button
                  data-testid="add-to-cart-button"
                  className="text-xs font-semibold"
                  onClick={() => addToCart()}
                >
                  افزودن به سبد خرید
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="text-xs font-semibold text-[#ed5464] border-gray-300 dark:border-neutral-800 bg-white dark:bg-darker-user hover:bg-[#fff5f5] hover:text-[#ed5464] dark:text-white dark:hover:text-white dark:hover:bg-"
                  onClick={() => remove(item.id)}
                >
                  حذف از سبد خرید
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
