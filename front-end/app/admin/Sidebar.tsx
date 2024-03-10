import React from "react";
import Link from "next/link";
import { links, icons } from "./components/LinksAndIcons";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import useSidebarToggle from "@/hooks/useSidebarToggle";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen } = useSidebarToggle();
  return (
    <div
      className={`bg-dark-bg z-50 dark:bg-[#252b3b] h-screen fixed shadow-md ${
        isOpen ? "" : "w-[10.5em]"
      }  text-white`}
    >
      <div className="flex justify-center py-[18px] px-2">
        <h1
          className={`${poppins.className} text-my-purple font-bold text-2xl`}
        >
          Shopify
        </h1>
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
                : `flex justify-center`
            }
          >
            <Link href={value}>
              <div
                className={`flex gap-2 items-center dark:text-white ${
                  !(pathname == value)
                    ? "hover:bg-darker-bg rounded-lg w-28 flex justify-center py-2"
                    : ""
                }`}
              >
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
