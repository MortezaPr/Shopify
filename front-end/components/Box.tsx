"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Phone from "@/types/Phone";
import Laptop from "@/types/Laptop";

type CardProps = {
  title: string;
  items: Phone[] | Laptop[];
};

const Card: React.FC<CardProps> = ({ title, items }) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      (scrollContainer.current as HTMLDivElement).scrollTo({
        left: (scrollContainer.current as HTMLDivElement).scrollLeft - 240,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      (scrollContainer.current as HTMLDivElement).scrollTo({
        left: (scrollContainer.current as HTMLDivElement).scrollLeft + 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-40">
        <div className="relative h-[27rem] w-[calc(100vw-10vw)] max-w-[80rem] bg-white dark:bg-dark-user rounded-lg border-slate-200 border-2 dark:border-neutral-800">
          <button
            className="hidden lg:block absolute top-44 right-2 p-2 bg-white dark:bg-darker-user bg-opacity-90 my_shadow dark:my_shadow_dark rounded-full justify-center items-center"
            onClick={scrollRight}
          >
            <div className="text-slate-600 dark:text-white font-bold text-2xl">
              <IoIosArrowForward />
            </div>
          </button>
          <div className="flex justify-between items-center pt-3">
            <h3 className="pr-7 text-lg font-bold">{title}</h3>
            <Link
              href="/"
              className="text-blue-700 flex items-center gap-1 pl-7"
            >
              <div className="text-sm font-semibold">نمایش همه</div>
              <div className="font-bold">
                <IoIosArrowBack />
              </div>
            </Link>
          </div>
          <div
            className="flex overflow-x-auto hide-scrollbar pr-5"
            ref={scrollContainer}
          >
            {items.map((item, index) => (
              <Link
                href={`/product/${item.slug}`}
                className="mt-10 flex border-slate-100 dark:border-neutral-800 border-l-[1px]"
                key={item.id}
              >
                <div className="w-52 h-[19rem]">
                  <div className="flex justify-center pt-2">
                    <Image
                      src={item.image}
                      alt="image"
                      width={160}
                      height={160}
                    />
                  </div>
                  <p className="pt-5 px-5 text-sm max-w-[20rem] overflow-hidden line-clamp-2">
                    {item.name}
                  </p>
                  <p className="flex justify-center text-sm pt-4">
                    {item.price.toLocaleString("fa")} تومان
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <button
            className="hidden lg:block absolute top-44 left-2 p-2 bg-white dark:bg-darker-user bg-opacity-90 my_shadow dark:my_shadow_dark rounded-full justify-center items-center"
            onClick={scrollLeft}
          >
            <div className="text-slate-600 dark:text-white font-bold text-2xl">
              <IoIosArrowBack />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
