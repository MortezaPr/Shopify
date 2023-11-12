import React from "react";
import { NavLink } from "react-router-dom";
import { links, icons } from "./LinksAndIcons";

interface SidebarProps {
  toggleSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <div
      className={`bg-white z-50 dark:bg-[#252b3b] h-screen fixed shadow-md ${
        toggleSidebar ? "" : "w-[10.5em]"
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
      <div className="flex flex-col items-center gap-6 pt-8">
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
