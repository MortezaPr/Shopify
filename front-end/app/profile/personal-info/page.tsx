import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const lg_class =
  "shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 rounded-lg";

const page = () => {
  return (
    <div
      className={`h-screen lg:h-auto lg:mx-0 lg:mt-0 bg-[#f1f5f7] dark:bg-darker-user flex flex-col lg:${lg_class} lg:bg-white lg:dark:bg-dark-user`}
    >
      <div className="lg:hidden bg-white dark:bg-dark-user flex items-center gap-3 pr-5">
        <Link href={"/profile"}>
          <IoArrowForward size={22} />
        </Link>

        <div>
          <h2 className="py-5 text-base">اطلاعات حساب کاربری</h2>
        </div>
      </div>

      <div className="hidden lg:block pr-5">
        <h1 className="pt-5 text-lg">اطلاعات حساب کاربری</h1>
        <div className="hidden lg:block h-[2px] w-[5.5rem] rounded-xl bg-my-purple mt-2"></div>
      </div>

      <div className="lg:hidden h-screen mt-3 bg-white dark:bg-dark-user pt-5 pr-5">
        show personal info and a way to edit it
      </div>
    </div>
  );
};

export default page;
