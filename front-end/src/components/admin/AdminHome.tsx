import { MdAssignment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import Box from "./Box";
import { MyResponsivePie, MyResponsiveLine } from "./Charts";

interface AdminHomeProps {
  toggleSidebar: boolean;
}

const AdminHome: React.FC<AdminHomeProps> = ({ toggleSidebar }) => {
  const earning = 120000;
  const customers = 252;
  const sales = 1235;

  return (
    <div className="h-screen w-full pt-4">
      <div className="flex flex-wrap justify-center md:pr-14 gap-10 pb-10">
        <Box
          title={"تعداد فروش"}
          icon={MdAssignment}
          color="bg-orange-100"
          accent="#03c9d7"
          data={sales}
        />

        <Box
          title={"تعداد کاربران"}
          icon={BsFillPeopleFill}
          color="bg-cyan-50"
          accent="#03c9d7"
          data={customers}
        />

        <Box
          title={"درآمد فروش"}
          icon={RiMoneyDollarCircleFill}
          color="bg-cyan-50"
          accent="#03c9d7"
          data={earning}
        />
      </div>
      <div className="flex flex-wrap justify-center md:pr-14 gap-10">
        <div
          className="w-[27rem] md:w-[41.5rem] h-[22rem] rounded-lg bg-white dark:bg-dark-bg shadow-md flex justify-center items-center"
          dir="ltr"
        >
          <MyResponsiveLine />
        </div>
        <div
          className="w-[26rem] h-[22rem] rounded-lg bg-white dark:bg-dark-bg shadow-md flex justify-center items-center col-span-2"
          dir="ltr"
        >
          <MyResponsivePie />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
