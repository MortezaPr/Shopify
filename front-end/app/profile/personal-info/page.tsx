import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";

const lg_class =
  "shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 rounded-lg";

const page = () => {
  const full_name = "مرتضی پوررمضان";
  const phone_number = "09123456789";
  const email = "pourramzanmorteza@gmail.com";
  const password = "12345678";

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
      <div className="hidden lg:block">
        <div className="h-96 grid place-content-center">
          <div className="flex">
            <div className="w-96 h-28 border-2 border-gray-300 border-l-0">
              <div className="pt-3 pr-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">نام و نام خانوادگی</p>
                  <p className="pt-4 font-bold">{full_name}</p>
                </div>
                <div className="pl-5 cursor-pointer">
                  <LuPencilLine size={22} />
                </div>
              </div>
            </div>
            <div className="w-96 h-28 border-2 border-gray-300">
              <div className="pt-3 pr-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">شماره موبایل</p>
                  <p className="pt-4 font-bold">{phone_number}</p>
                </div>
                <div className="pl-5 cursor-pointer">
                  <LuPencilLine size={22} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-96 h-28 border-2 border-gray-300 border-l-0 border-t-0">
              <div className="pt-3 pr-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">ایمیل</p>
                  <p className="pt-4 font-bold">{email}</p>
                </div>
                <div className="pl-5 cursor-pointer">
                  <LuPencilLine size={22} />
                </div>
              </div>
            </div>
            <div className="w-96 h-28 border-2 border-gray-300 border-t-0">
              <div className="pt-3 pr-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">رمز عبور</p>
                  <p className="pt-4 font-bold">********</p>
                </div>
                <div className="pl-5 cursor-pointer">
                  <LuPencilLine size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-screen mt-3 bg-white dark:bg-dark-user pt-7">
        <div className="flex flex-col">
          <div className="border-2 border-gray-300 border-x-0 pb-5">
            <div className="pt-3 pr-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400">نام و نام خانوادگی</p>
                <p className="pt-4 font-bold">{full_name}</p>
              </div>
              <div className="pl-5 cursor-pointer">
                <LuPencilLine size={22} />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 border-x-0 border-t-0 pb-5">
            <div className="pt-3 pr-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400">شماره موبایل</p>
                <p className="pt-4 font-bold">{phone_number}</p>
              </div>
              <div className="pl-5 cursor-pointer">
                <LuPencilLine size={22} />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 border-x-0 border-t-0 pb-5">
            <div className="pt-3 pr-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400">ایمیل</p>
                <p className="pt-4 font-bold">{email}</p>
              </div>
              <div className="pl-5 cursor-pointer">
                <LuPencilLine size={22} />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 border-x-0 border-t-0 pb-5">
            <div className="pt-3 pr-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400">رمز عبور</p>
                <p className="pt-4 font-bold">********</p>
              </div>
              <div className="pl-5 cursor-pointer">
                <LuPencilLine size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
