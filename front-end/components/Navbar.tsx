"use client";
import ThemeToggle from "@/components/ThemeToggle";

import { Input } from "@/components/ui/input";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { ICONS, LINKS, FILL_ICONS } from "@/components/NavbarConstants";
import AuthStatus from "./AuthStatus";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Bold.ttf",
    },
  ],
});

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();

  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push(`/search?query=${value}`);
  };

  return (
    <div>
      <div
        className={`fixed z-50 bg-white dark:bg-dark-user bg-opacity-85 backdrop-blur-lg h-16 lg:h-20 shadow-sm ${
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
                className="w-[calc(100vw-40px)] lg:w-[35rem] border-none bg-gray-200 dark:bg-darker-user pr-14 flex h-12 py-0 caret-cyan-600 placeholder:text-gray-500"
                placeholder="جستجو"
              />
              <div
                className="text-gray-400 absolute top-[0.85rem] right-5 cursor-pointer"
                onClick={() => handleSearch(searchValue)}
              >
                <BiSearch size={22} />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex pl-12 items-center pt-4 gap-5">
            <AuthStatus />
            <Link href={"/shoppingCart"} className="dark:text-white">
              <FiShoppingCart size={22} />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="fixed z-50 flex items-center justify-center gap-24 sm:gap-30 md:gap-44 lg:hidden bottom-0 bg-white dark:bg-dark-user bg-opacity-30 backdrop-blur-lg h-16 w-full shadow-sm border-gray-300 dark:border-gray-950 border-t-2 text-gray-700 dark:text-white">
        {Object.entries(ICONS).map(([key]) => (
          <Link
            href={LINKS[key]}
            key={key}
            className="flex flex-col gap-2 items-center justify-center cursor-pointer"
          >
            {pathname == LINKS[key] ? FILL_ICONS[key] : ICONS[key]}

            <span className="text-xs">{key}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
