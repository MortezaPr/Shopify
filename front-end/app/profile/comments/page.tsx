import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const lg_class =
  "bg-white dark:bg-dark-user shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 rounded-lg";

const page = () => {
  return (
    <div
      className={`h-screen lg:h-auto lg:mx-0 lg:mt-0 bg-[#f1f5f7] dark:bg-darker-user flex flex-col lg:${lg_class}`}
    >
      <div className="bg-white dark:bg-dark-user flex items-center gap-3 pr-5">
        <Link href={"/profile"}>
          <IoArrowForward size={22} />
        </Link>
        <h2 className="py-5 text-base">دیدگاه ها</h2>
      </div>
      <div className="lg:hidden h-screen mt-3 bg-white dark:bg-dark-user pt-5 pr-5">
        list of comments
      </div>
    </div>
  );
};

export default page;
