import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  let links = {
    داشبرد: "/admin/dashboard",
    سفارشات: "/admin/orders",
    محصولات: "/admin/products",
    انبار: "/admin/inventory",
    " مشتری ها": "/admin/customers",
    کارکنان: "/admin/staff",
    تنظیمات: "/admin/settings",
  };

  return (
    <div className="fixed w-full flex items-center justify-between shadow-md rounded-lg py-3 px-5">
      <div className="hidden lg:flex gap-6 text-lg">
        {Object.entries(links).map(([key, value]) => (
          <NavLink
            to={value}
            key={key}
            className={({ isActive }) =>
              isActive
                ? "bg-my-purple text-white py-2 rounded-lg h-10 w-24 flex justify-center shadow-md"
                : "py-2 h-10 w-20 flex justify-center"
            }
          >
            {key}
          </NavLink>
        ))}
      </div>
      <div className="flex lg:hidden">
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
              className="cursor-pointer"
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
      <div className="flex">
        <p className="flex items-center pl-3 text-sm">مرتضی پوررمضان</p>
        <Avatar src="../../../public/progile.jpg" alt="profile picture" />
      </div>
    </div>
  );
};

export default Navbar;
