"use client";
import { MdAssignment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillPeopleFill, BsFillBoxFill } from "react-icons/bs";
import Box from "../components/Box";
import { MyResponsivePie, MyResponsiveLine } from "../components/Charts";
import useSidebarToggle from "@/hooks/useSidebarToggle";
import { useTheme } from "next-themes";

const Dashboard = () => {
  const earning = 120000;
  const customers = 252;
  const sales = 1235;
  const products = 4396;

  const { isOpen } = useSidebarToggle();
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`pt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:ml-10 ${
          isOpen ? "md:mr-32" : "md:mr-52"
        } gap-6`}
      >
        <Box
          title={"تعداد فروش"}
          icon={MdAssignment}
          accent="#03c9d7"
          data={sales}
        />

        <Box
          title={"تعداد کاربران"}
          icon={BsFillPeopleFill}
          accent="#03c9d7"
          data={customers}
        />

        <Box
          title={"محصولات"}
          icon={BsFillBoxFill}
          accent="#03c9d7"
          data={products}
        />

        <Box
          title={"درآمد فروش"}
          icon={RiMoneyDollarCircleFill}
          accent="#03c9d7"
          data={earning}
        />
        <div
          className="md:col-span-2 lg:col-span-2 xl:col-span-1 h-[22rem] rounded-lg bg-white dark:bg-dark-bg shadow-md flex justify-center items-center"
          dir="ltr"
        >
          <MyResponsivePie
            textColor={resolvedTheme == "dark" ? "#ffffff" : "#000000"}
          />
        </div>
        <div
          className="md:col-span-2 lg:col-span-2 xl:col-span-3 h-[22rem] rounded-lg bg-white dark:bg-dark-bg shadow-md flex justify-center items-center"
          dir="ltr"
        >
          <MyResponsiveLine />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
