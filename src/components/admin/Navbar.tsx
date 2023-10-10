import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between shadow-md rounded-lg py-3 px-5">
      <div className="flex gap-5 font-semibold text-lg">
        <Link to={"/admin"}>خانه</Link>
        <Link to={"/admin"}>سفارشات</Link>
        <Link to={"/admin"}>محصولات</Link>
        <Link to={"/admin"}>انبار</Link>
        <Link to={"/admin"}>مشتری ها</Link>
        <Link to={"/admin"}>کارکنان</Link>
        <Link to={"/admin"}>تنظیمات</Link>
      </div>
      <div className="flex">
        <p className="flex items-center pl-3">مرتضی پوررمضان</p>
        <img
          src="../../../public/progile.jpg"
          alt="profile picture"
          className="rounded-full h-12 w-12 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
