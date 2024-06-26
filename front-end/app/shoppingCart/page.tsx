"use client";
import React from "react";
import shopping from "@/public/images/shopping.png";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/Product";

const ShoppingCart = () => {
  const { items, addItem, editItem, removeItem } = useCart();
  const [shopping_cart, setShopping_cart] = React.useState(items);

  const total_price = shopping_cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const remove = (id: number) => {
    removeItem(id);
    setShopping_cart(shopping_cart.filter((item) => item.id !== id));
  };

  const handleIncrement = (id: number) => {
    setShopping_cart(
      shopping_cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    const newItem = shopping_cart.find((item) => item.id === id);
    if (newItem) {
      editItem(id, newItem);
    }
  };

  const handleDecrement = (id: number) => {
    setShopping_cart(
      shopping_cart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
    const newItem = shopping_cart.find((item) => item.id === id);
    if (newItem) {
      editItem(id, newItem);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center pt-28 lg:pt-40">
      {shopping_cart.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Image
            src={shopping}
            width={200}
            height={200}
            alt="empty shopping cart"
          />
          <p className="pt-5 text-lg dark:text-white">سبد خرید خالی است!</p>
        </div>
      ) : (
        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {shopping_cart.map((item: Product) => (
              <div
                key={item.id}
                className="h-72 w-screen flex justify-center lg:justify-normal lg:w-[40rem] xl:w-[50rem] border-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-dark-user rounded-lg"
              >
                <div className="flex pt-14 lg:pr-8">
                  <div>
                    <Image
                      src={item.image?.image_url}
                      width={150}
                      height={150}
                      alt="pic"
                    />
                  </div>
                  <div className="flex flex-col gap-4 pr-5 pl-5 lg:pl-0">
                    <p className="max-w-[30rem] overflow-hidden line-clamp-2 leading-7 text-sm font-bold">
                      {item.title}
                    </p>
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-black"></div>
                      <p className="text-gray-500">{item.color}</p>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                      <div className="h-10 w-36 border-2 border-gray-200 dark:border-neutral-700 rounded-lg flex justify-between items-center md:mr-8 mt-3">
                        <button
                          data-testid="increment-button"
                          className="pr-3 text-lg font-bold text-my-purple"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                        <p
                          data-testid="item-count"
                          className="text-lg font-bold text-my-purple"
                        >
                          {item.count}
                        </p>
                        {item.count == 1 ? (
                          <button
                            data-testid="remove-button"
                            className="text-red-500 pl-3"
                            onClick={() => remove(item.id)}
                          >
                            <FaRegTrashAlt />
                          </button>
                        ) : (
                          <button
                            data-testid="decrement-button"
                            className="pl-3 text-lg font-bold text-my-purple"
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </button>
                        )}
                      </div>
                      <div className="text-lg font-bold pt-3 lg:ml-10 xl:ml-0">
                        {item.price.toLocaleString("fa")} تومان
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block h-72 md:w-64 lg:w-80 xl:w-96 border-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-dark-user rounded-lg">
            <div className="pt-5 flex justify-between">
              <p className="text-gray-600 dark:text-gray-300 pr-5">
                قیمت کالاها ({shopping_cart.length.toLocaleString("fa")})
              </p>
              <p className="pl-5 text-lg font-bold">
                {total_price.toLocaleString("fa")} تومان
              </p>
            </div>
            <div className="pt-5 flex justify-between">
              <p className="font-bold pr-5">جمع سبد خرید</p>
              <p className="pl-5 text-lg font-bold">
                {total_price.toLocaleString("fa")} تومان
              </p>
            </div>
            <div className="flex justify-center pt-20">
              <Button className="text-base font-bold lg:w-72 xl:w-80 h-14">
                ثبت سفارش
              </Button>
            </div>
          </div>
          <div className="fixed bottom-16 h-20 w-full bg-white dark:bg-dark-user border-2 border-b-0 border-x-0 border-gray-200 dark:border-neutral-800 lg:hidden">
            <div className="flex justify-between pt-5">
              <div className="pr-5">
                <Button className="text-base font-bold">ثبت سفارش</Button>
              </div>
              <div className="flex flex-col items-center pl-5">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  جمع سبد خرید
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-bold">
                  {total_price.toLocaleString("fa")} تومان
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
