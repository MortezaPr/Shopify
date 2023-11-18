import React from "react";
import { Roboto } from "next/font/google";
import { Input } from "@/components/ui/input";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { TbLogin } from "react-icons/tb";
import DarkMode from "@/app/admin/components/ThemeToggle";
import { BiSearch } from "react-icons/bi";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="w-full bg-white dark:bg-dark-bg h-16 lg:h-24 shadow-sm border-b-2 border-gray-300 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center pt-2 lg:pt-4 gap-5">
          <h1
            className={`${roboto} text-my-purple font-extrabold text-4xl pr-10 hidden lg:flex`}
          >
            Shopify
          </h1>

          <div className="relative">
            <Input
              className="w-screen lg:w-[35rem] border-none bg-gray-100 dark:bg-darker-bg pr-14 flex"
              placeholder="جستجو"
            />
            <div className="text-gray-400 absolute top-3 right-3 cursor-pointer">
              <BiSearch size={22} />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex pl-12 items-center pt-4 gap-5">
          <Button
            variant="outline"
            className="bg-white dark:bg-darker-bg border-gray-300 dark:border-darker-bg"
          >
            <div className="flex gap-2">
              <TbLogin size={22} />
              ورود | ثبت نام
            </div>
          </Button>
          <div className="text-gray-700 dark:text-white">
            <FiShoppingCart size={22} />
          </div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
