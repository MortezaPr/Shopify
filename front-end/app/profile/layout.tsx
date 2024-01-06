"use client";
import React from "react";
import { LuPencilLine } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BsSignpost2 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";


type IconsType = {
  [key: string]: JSX.Element;
};

export let links = {
  "خلاصه فعالیت ها": "/profile",
  "لیست های من": "/profile/lists",
  "آدرس ها": "/profile/addresses",
  "اطلاعات حساب کاربری": "/profile/personal-info",
  خروج: "/",
};

export let icons: IconsType = {
  "خلاصه فعالیت ها": <AiOutlineHome size={22} />,
  "لیست های من": <FaRegHeart size={22} />,
  "آدرس ها": <BsSignpost2 size={22} />,
  "اطلاعات حساب کاربری": <GoPerson size={22} />,
  خروج: <RxExit size={22} />,
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="lg:h-screen w-[calc(100vw-15px)] lg:w-screen flex flex-col-reverse lg:grid lg:grid-cols-7 gap-5 lg:pt-32 pb-20 lg:pb-10 lg:px-16 justify-center">
      <div
        className={`${
          pathname == "/profile" ? "" : "hidden lg:flex lg:flex-col"
        } bg-white h-[35rem] lg:h-auto dark:bg-dark-user shadow-sm border-[1.5px] border-gray-200 dark:border-none lg:rounded-lg col-span-2`}
      >
        <div className="pt-5 px-5 flex justify-between">
          <div className="flex flex-col gap-1">
            <h1>مرتضی پوررمضان</h1>
            <p className="text-sm text-gray-500">09123456789</p>
          </div>

          <Link href={"/profile/personal-info"} className="text-cyan-500 pl-2">
            <LuPencilLine size={20} />
          </Link>
        </div>
        <div className="mx-5 border-b-2 border-gray-200 dark:border-gray-600 pt-5"></div>

        {Object.entries(links).map(([key, value]) => (
          <ul key={key}>
            <Link
              href={value}
              className="flex justify-between items-center pl-7 hover:bg-gray-100 dark:hover:bg-darker-user"
            >
              <div className="flex items-center gap-3 pr-5 py-5">
                <div className="">{icons[key]}</div>
                {key}
              </div>
              <div className="lg:hidden">
                <IoIosArrowBack />
              </div>
            </Link>
            {key !== "خروج" ? (
              <div className="mx-5 border-b-[1.5px] border-gray-100 dark:border-gray-500"></div>
            ) : (
              ""
            )}
          </ul>
        ))}
      </div>
      {children}
    </div>
  );
}
