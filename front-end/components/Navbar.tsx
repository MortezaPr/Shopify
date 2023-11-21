"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { Input } from "@/components/ui/input";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { TbLogin } from "react-icons/tb";
import DarkMode from "@/app/admin/components/ThemeToggle";
import { RiHome2Fill } from "react-icons/ri";
import {
  BiCategory,
  BiHomeAlt2,
  BiSearch,
  BiSolidCategory,
} from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoPersonFill } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";

type IconsType = {
  [key: string]: JSX.Element;
};

let icons: IconsType = {
  خانه: <BiHomeAlt2 size={25} />,
  "دسته بندی": <BiCategory size={25} />,
  "سبد خرید": <FiShoppingCart size={25} />,
  کاربر: <GoPerson size={25} />,
};

let links = {
  خانه: "/",
  "دسته بندی": "/category",
  "سبد خرید": "/shoppingCart",
  کاربر: "/user",
};

let fillIcons: IconsType = {
  خانه: <RiHome2Fill size={25} />,
  "دسته بندی": <BiSolidCategory size={25} />,
  "سبد خرید": <PiShoppingCartSimpleFill size={25} />,
  کاربر: <GoPersonFill size={25} />,
};

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div className="w-full fixed bg-white dark:bg-dark-user h-16 lg:h-24 shadow-sm border-b-2 border-gray-300 dark:border-gray-950">
        <div className="flex justify-between items-center">
          <div className="flex items-center pt-2 lg:pt-4 gap-5">
            <h1
              className={`${roboto} text-my-purple font-extrabold text-4xl pr-10 hidden lg:flex`}
            >
              Shopify
            </h1>

            <div className="relative">
              <Input
                className="w-screen lg:w-[35rem] border-none bg-gray-100 dark:bg-darker-user pr-14 flex"
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
              className="bg-white dark:bg-darker-user border-gray-300 dark:border-darker-user"
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
      <div className="absolute flex items-center justify-center gap-20 sm:gap-30 md:gap-44 lg:hidden bottom-0 bg-white dark:bg-dark-user h-16 w-full shadow-sm border-gray-300 dark:border-gray-950 border-t-2 text-gray-700 dark:text-white">
        {Object.entries(icons).map(([key]) => (
          <Link
            href={links[key]}
            key={key}
            className="flex flex-col gap-2 items-center justify-center cursor-pointer"
          >
            {pathname == links[key] ? fillIcons[key] : icons[key]}

            <span className="text-xs">{key}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
