import { BiSolidDashboard, BiCategory } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";

type IconsType = {
  [key: string]: JSX.Element;
};

export let links = {
  داشبورد: "/admin/dashboard",
  سفارشات: "/admin/orders",
  محصولات: "/admin/products",
  " مشتری ها": "/admin/customers",
};

export let icons: IconsType = {
  داشبورد: <BiSolidDashboard size={20} />,
  سفارشات: <HiOutlineShoppingCart size={20} />,
  محصولات: <BiCategory size={20} />,
  " مشتری ها": <BsFillPeopleFill size={20} />,
};
