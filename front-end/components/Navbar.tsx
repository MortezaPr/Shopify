"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSearching from "@/hooks/useSearching";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiShoppingCart } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import { RiHome2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoPersonFill, GoTriangleDown, GoPerson } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const poppins = localFont({
  src: "../app/assets/fonts/Poppins-Bold.ttf",
  weight: "700",
  style: "bold",
});

type IconsType = {
  [key: string]: JSX.Element;
};

type LinksType = {
  [key: string]: string;
};

let icons: IconsType = {
  خانه: <BiHomeAlt2 size={25} />,
  "سبد خرید": <FiShoppingCart size={25} />,
  پروفایل: <GoPerson size={25} />,
};

let links: LinksType = {
  خانه: "/",
  "سبد خرید": "/shoppingCart",
  پروفایل: "/profile",
};

let fillIcons: IconsType = {
  خانه: <RiHome2Fill size={25} />,
  "سبد خرید": <PiShoppingCartSimpleFill size={25} />,
  پروفایل: <GoPersonFill size={25} />,
};

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const { isSearching, onSearch, onCloseSearch } = useSearching();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const router = useRouter();

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

  const handleSearch = (value: string) => {
    router.push(`/search?query=${value}`);
  };

  return (
    <div onClick={handleClick}>
      <div
        className={`fixed z-50 bg-white dark:bg-dark-user bg-opacity-60 backdrop-blur-lg h-16 lg:h-20 shadow-sm ${
          pathname.startsWith("/profile") ? "hidden lg:block" : ""
        }`}
      >
        <div className="flex w-screen justify-between items-center">
          <div className="flex items-center pt-2 lg:pt-4 lg:gap-5">
            <Link href={"/"}>
              <h1
                className={`${poppins.className} text-my-purple font-extrabold text-3xl pr-10 hidden lg:flex`}
              >
                Shopify
              </h1>
            </Link>

            <div className="relative mx-2 lg:mx-0">
              <Input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-[calc(100vw-15px)] lg:w-[35rem] border-none bg-gray-200 dark:bg-darker-user pr-14 flex h-12 py-0 caret-cyan-600 placeholder:text-gray-500"
                placeholder="جستجو"
                onClick={(e) => handleSearchClick(e)}
              />
              <div
                className="text-gray-400 absolute top-[0.85rem] right-5 cursor-pointer"
                onClick={() => handleSearch(searchValue)}
              >
                <BiSearch size={22} />
              </div>
            </div>
            {isSearching ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-[4.5rem] lg:right-[11rem] bg-gray-100 dark:bg-darker-user w-full lg:w-[35.1rem] h-60 rounded-xl flex-col pr-5 pt-5"
              >
                search results
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
                  <DropdownMenuContent className="dark:border-neutral-800">
                    <DropdownMenuItem className="flex p-2">
                      <Link
                        href={"/profile"}
                        className="flex gap-10 items-center p-2"
                      >
                        <MdKeyboardArrowLeft size={20} />
                        <div className="font-bold">مرتضی پوررمضان</div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="dark:bg-neutral-800" />

                    <DropdownMenuItem>
                      <Link
                        href={"/profile"}
                        className="flex gap-2 items-center p-2"
                      >
                        سفارش ها
                        <FiShoppingCart />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Link
                        href={"/profile/lists"}
                        className="flex gap-2 items-center p-2"
                      >
                        لیست ها
                        <FaRegHeart />
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
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="fixed flex items-center justify-center gap-24 sm:gap-30 md:gap-44 lg:hidden bottom-0 bg-white dark:bg-dark-user bg-opacity-30 backdrop-blur-lg h-16 w-screen shadow-sm border-gray-300 dark:border-gray-950 border-t-2 text-gray-700 dark:text-white">
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
