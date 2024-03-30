import { GoPerson, GoPersonFill } from "react-icons/go";
import { BiHomeAlt2 } from "react-icons/bi";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiHome2Fill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

type IconsType = {
  [key: string]: JSX.Element;
};

type LinksType = {
  [key: string]: string;
};

export const ICONS: IconsType = {
  خانه: <BiHomeAlt2 size={25} />,
  "سبد خرید": <FiShoppingCart size={25} />,
  پروفایل: <GoPerson size={25} />,
};

export const LINKS: LinksType = {
  خانه: "/",
  "سبد خرید": "/shoppingCart",
  پروفایل: "/profile",
};

export const FILL_ICONS: IconsType = {
  خانه: <RiHome2Fill size={25} />,
  "سبد خرید": <PiShoppingCartSimpleFill size={25} />,
  پروفایل: <GoPersonFill size={25} />,
};
