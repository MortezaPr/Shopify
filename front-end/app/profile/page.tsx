import React from "react";
import DarkMode from "@/app/admin/components/ThemeToggle";
import order from "@/public/images/order.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="lg:block h-96 lg:h-auto  bg-white dark:bg-dark-user shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 lg:rounded-lg">
      <div className="flex justify-between">
        <div>
          <h1 className="pt-8 pr-10 text-lg">سفارش های من</h1>
          <div className="h-[2px] w-[5.5rem] rounded-xl bg-my-purple mr-10 mt-2"></div>
        </div>
        <div className="pt-8 pl-7 lg:hidden">
          <DarkMode />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-14">
        <Image src={order} width={150} height={150} alt="empty shopping cart" />
        <p className="pt-5 dark:text-white">سفارشی ثبت نشده!</p>
      </div>
    </div>
  );
};

export default page;
