import React from "react";
import DarkMode from "@/app/admin/components/ThemeToggle";

const page = () => {
  return (
    <div className="lg:block h-96 lg:h-auto flex justify-between bg-white dark:bg-dark-user shadow-sm border-[1.5px] border-gray-200 dark:border-none col-span-5 lg:rounded-lg">
      <div>
        <h1 className="pt-8 pr-10 text-lg">سفارش های من</h1>
        <div className="h-[2px] w-[5.5rem] rounded-xl bg-my-purple mr-10 mt-2"></div>
      </div>
      <div className="pt-8 pl-7 lg:hidden">
        <DarkMode />
      </div>
    </div>
  );
};

export default page;
