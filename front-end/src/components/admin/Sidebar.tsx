import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";
import { NavLink } from "react-router-dom";

type IconsType = {
  [key: string]: JSX.Element;
};

interface SidebarProps {
  toggleSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  let links = {
    داشبرد: "/admin/dashboard",
    سفارشات: "/admin/orders",
    محصولات: "/admin/products",
    " مشتری ها": "/admin/customers",
  };

  let icons: IconsType = {
    داشبرد: <DashboardIcon fontSize="small" />,
    سفارشات: <ShoppingCartIcon fontSize="small" />,
    محصولات: <CategoryIcon fontSize="small" />,
    " مشتری ها": <PeopleAltIcon fontSize="small" />,
  };
  return (
    <div
      className={`bg-white z-50 dark:bg-[#252b3b] h-screen fixed shadow-md ${
        toggleSidebar ? "" : "w-[221px]"
      }  dark:text-white text-black`}
    >
      <div className="flex justify-center py-[18px] px-2 shadow-md">
        <p
          style={{ fontFamily: "Roboto" }}
          className="text-my-purple font-bold text-xl"
        >
          Shopify
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 pt-5">
        {Object.entries(links).map(([key, value]) => (
          <div className="flex items-center gap-3">
            <NavLink
              to={value}
              key={key}
              className={({ isActive }) =>
                isActive
                  ? `bg-my-purple text-white py-2 rounded-lg ${
                      toggleSidebar ? "w-16" : "w-28"
                    } flex justify-center shadow-md`
                  : `py-2 flex justify-center`
              }
            >
              <div className="flex gap-2 items-center dark:text-white">
                {icons[key]}
                {toggleSidebar ? "" : key}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
