"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DarkMode from "@/app/admin/components/ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useSearching from "@/hooks/useSearching";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiShoppingCart } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import { RiHome2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { GoPersonFill, GoTriangleDown, GoPerson } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import {
  BiCategory,
  BiHomeAlt2,
  BiSearch,
  BiSolidCategory,
} from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

type IconsType = {
  [key: string]: JSX.Element;
};

type LinksType = {
  [key: string]: string;
};

let icons: IconsType = {
  خانه: <BiHomeAlt2 size={25} />,
  "دسته بندی": <BiCategory size={25} />,
  "سبد خرید": <FiShoppingCart size={25} />,
  پروفایل: <GoPerson size={25} />,
};

let links: LinksType = {
  خانه: "/",
  "دسته بندی": "/category",
  "سبد خرید": "/shoppingCart",
  پروفایل: "/profile",
};

let fillIcons: IconsType = {
  خانه: <RiHome2Fill size={25} />,
  "دسته بندی": <BiSolidCategory size={25} />,
  "سبد خرید": <PiShoppingCartSimpleFill size={25} />,
  پروفایل: <GoPersonFill size={25} />,
};

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  const { isSearching, onSearch, onCloseSearch } = useSearching();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSearchClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (isSearching) {
      onCloseSearch();
    } else {
      onSearch();
    }
  };

  const handleClick = () => {
    onCloseSearch();
  };

  return (
    <div onClick={handleClick}>
      <div
        className={`w-full fixed z-50 bg-white dark:bg-dark-user h-16 lg:h-24 shadow-sm`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center pt-2 lg:pt-4 gap-5">
            <Link href={"/"}>
              <h1
                className={`${roboto.className} text-my-purple font-extrabold text-4xl pr-10 hidden lg:flex`}
              >
                Shopify
              </h1>
            </Link>

            <div className="relative">
              <Input
                className="w-screen lg:w-[35rem] border-none bg-gray-100 dark:bg-darker-user pr-14 flex"
                placeholder="جستجو"
                onClick={(e) => handleSearchClick(e)}
              />
              <div className="text-gray-400 absolute top-3 right-3 cursor-pointer">
                <BiSearch size={22} />
              </div>
            </div>
            {isSearching ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className="hidden lg:flex absolute top-[4.5rem] right-[11.5rem] bg-gray-100 dark:bg-darker-user w-[35rem] h-60 rounded-xl flex-col pr-5 pt-5"
              >
                hello
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="hidden lg:flex pl-12 items-center pt-4 gap-5">
            {isLoggedIn ? (
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    style={{
                      outline: "none",
                    }}
                  >
                    <div className="flex gap-1">
                      <IoPersonOutline size={22} />
                      <GoTriangleDown />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="flex p-2">
                      <Link
                        href={"/profile"}
                        className="flex gap-10 items-center p-2"
                      >
                        <MdKeyboardArrowLeft size={20} />
                        مرتضی پوررمضان
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <Link
                        href={"/orders"}
                        className="flex gap-2 items-center p-2"
                      >
                        سفارش ها
                        <FiShoppingCart />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Link
                        href={"/lists"}
                        className="flex gap-2 items-center p-2"
                      >
                        لیست ها
                        <FaRegHeart />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Link
                        href={"/comments"}
                        className="flex gap-2 items-center p-2"
                      >
                        دیدگاه ها
                        <FaRegComment />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <button className="flex gap-2 items-center p-2">
                        خروج از حساب کاربری
                        <RxExit />
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button
                variant="outline"
                className="bg-white dark:bg-darker-user border-gray-300 dark:border-darker-user"
              >
                <div className="flex gap-2">
                  <TbLogin size={22} />
                  ورود | ثبت نام
                </div>
              </Button>
            )}

            <Link
              href={"/shoppingCart"}
              className="text-gray-700 dark:text-white"
            >
              <FiShoppingCart size={22} />
            </Link>
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
