"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Card = ({ phones }) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      (scrollContainer.current as HTMLDivElement).scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      (scrollContainer.current as HTMLDivElement).scrollLeft += 210;
    }
  };
  return (
    <div>
      <div className="flex justify-center pt-40">
        <div className="relative h-[27rem] w-[calc(100vw-100px)] bg-white dark:bg-dark-user rounded-lg border-slate-200 border-2 dark:border-neutral-800">
          <button
            className="absolute top-1/2 right-2 w-10 h-10 p-6 bg-white dark:bg-neutral-800 bg-opacity-90 shadow-xl rounded-full flex justify-center items-center"
            onClick={scrollRight}
          >
            <div className="text-slate-600 font-bold text-2xl">
              <IoIosArrowForward />
            </div>
          </button>
          <div className="flex justify-between items-center pt-3">
            <h3 className="pr-7 text-lg">موبایل های پرفروش</h3>
            <Link
              href="/"
              className="text-blue-700 flex items-center gap-2 pl-7"
            >
              <div>نمایش همه</div>
              <IoIosArrowBack />
            </Link>
          </div>
          <div
            className="flex overflow-x-auto hide-scrollbar"
            ref={scrollContainer}
          >
            {phones.map((phone, index) => (
              <Link
                href={`/product/${phone.slug}`}
                className="pt-10 pr-10 flex"
                key={phone.id}
              >
                <div className="w-64 h-[19rem] border-slate-200 dark:border-neutral-800 border-2 rounded-lg">
                  <div className="flex justify-center pt-2">
                    <Image
                      src={phone.pic}
                      alt="image"
                      width={160}
                      height={160}
                    />
                  </div>
                  <p className="pt-5 px-7 text-sm max-w-[20rem] overflow-hidden line-clamp-2">
                    {phone.title}
                  </p>
                  <p className="flex justify-center text-sm pt-4">
                    {phone.price.toLocaleString("fa")} تومان
                  </p>
                </div>
                {index !== phones.length - 1 && (
                  <div className="h-[19rem] w-[2px] flex bg-slate-200 dark:bg-neutral-800 mr-10"></div>
                )}
                {index === phones.length - 1 && <div className="pl-10"></div>}
              </Link>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 w-10 h-10 p-6 bg-white dark:bg-neutral-800 bg-opacity-90 shadow-xl rounded-full flex justify-center items-center"
            onClick={scrollLeft}
          >
            <div className="text-slate-600 font-bold text-2xl">
              <IoIosArrowBack />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
