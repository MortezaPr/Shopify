import React from "react";
import Link from "next/link";
import { links, icons } from "./LinksAndIcons";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import useSidebarToggle from "@/hooks/useSidebarToggle";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen } = useSidebarToggle();
  return (
    <div
      className={`bg-white z-50 dark:bg-[#252b3b] h-screen fixed shadow-md ${
        isOpen ? "" : "w-[10.5em]"
      }  dark:text-white text-black`}
    >
      <div className="flex justify-center py-[18px] px-2 shadow-md">
        <p className={`${roboto} text-my-purple font-bold text-xl`}>Shopify</p>
      </div>
      <div className="flex flex-col items-center gap-6 pt-8">
        {Object.entries(links).map(([key, value]) => (
          <li
            key={key}
            className={
              pathname == value
                ? `bg-my-purple text-white py-2 rounded-lg ${
                    isOpen ? "w-16" : "w-28"
                  } flex justify-center shadow-md`
                : `py-2 flex justify-center`
            }
          >
            <Link href={value}>
              <div className="flex gap-2 items-center dark:text-white">
                {icons[key]}
                {isOpen ? "" : key}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
