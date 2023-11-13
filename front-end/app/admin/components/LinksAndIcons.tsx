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
  داشبورد: <BiSolidDashboard fontSize="small" />,
  سفارشات: <HiOutlineShoppingCart fontSize="small" />,
  محصولات: <BiCategory fontSize="small" />,
  " مشتری ها": <BsFillPeopleFill fontSize="small" />,
};
