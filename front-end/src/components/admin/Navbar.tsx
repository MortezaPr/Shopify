import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";

type IconsType = {
  [key: string]: JSX.Element;
};

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const navigate = useNavigate();
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
    <div className="fixed w-full flex items-center justify-between shadow-md rounded-lg py-3 px-5 bg-white">
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        {Object.entries(links).map(([key, value]) => (
          <div className="flex items-center gap-3">
            <NavLink
              to={value}
              key={key}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#068FFF] text-white py-2 rounded-lg h-10 w-28 flex justify-center shadow-md"
                  : "py-2 h-10 w-28 flex justify-center"
              }
            >
              <div className="flex gap-2 items-center">
                {icons[key]}
                {key}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex md:hidden">
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        />
      </div>
      {toggleSidebar && (
        <div className="fixed top-0 right-0 bottom-0 w-1/2 h-full bg-white overflow-y-auto shadow-md z-10 animate-slide-in rounded-md">
          <div className="absolute w-full flex justify-end items-center p-2">
            <CloseIcon
              onClick={() => setToggleSidebar(false)}
              className="cursor-pointer rounded-xl hover:shadow-sm"
            />
          </div>
          <div className="mt-14 mr-5 text-lg flex flex-col gap-6">
            {Object.entries(links).map(([key, value]) => (
              <NavLink
                to={value}
                key={key}
                className={({ isActive }) =>
                  isActive
                    ? "bg-my-purple text-white py-2 rounded-lg h-10 w-4/5 flex justify-center shadow-md"
                    : "py-2 h-10 w-4/5 flex flex-col items-center"
                }
              >
                {key}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center gap-3">
        <div onClick={() => navigate("/admin/settings")}>
          <SettingsIcon fontSize="small" style={{ cursor: "pointer" }} />
        </div>
        <p className="text-sm">مرتضی پوررمضان</p>
        <Avatar src="../../../public/progile.jpg" alt="profile picture" />
      </div>
    </div>
  );
};

export default Navbar;
