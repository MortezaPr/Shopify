import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkMode from "./DarkMode";
import { links, icons } from "./LinksAndIcons";

interface SidebarProps {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<SidebarProps> = ({
  toggleSidebar,
  setToggleSidebar,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed flex items-center justify-between shadow-md py-3 px-5 bg-white dark:bg-dark-bg">
      <div
        className={`flex dark:text-white ${toggleSidebar ? "md:pr-20" : ""}`}
      >
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        />
      </div>
      {toggleSidebar && (
        <div className="flex md:hidden">
          <div className="fixed top-0 right-0 bottom-0 w-1/2 h-full bg-white dark:bg-dark-bg dark:text-white overflow-y-auto shadow-md z-10 animate-slide-in rounded-md">
            <div className="absolute w-full flex justify-end items-center p-2 ">
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
                      ? "bg-my-purple text-white py-2 rounded-lg h-10 w-4/5 flex justify-center gap-5 shadow-md"
                      : "py-2 h-10 w-4/5 flex flex-col items-center"
                  }
                >
                  <div className="flex gap-3">
                    {icons[key]}
                    {key}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex items-center gap-3 ${
          !toggleSidebar ? "md:pl-[220px]" : ""
        }`}
      >
        <DarkMode />
        <div
          onClick={() => navigate("/admin/settings")}
          className="dark:text-white"
        >
          <SettingsIcon fontSize="small" style={{ cursor: "pointer" }} />
        </div>
        <p className="text-sm dark:text-white">مرتضی پوررمضان</p>
        <Avatar src="../../../public/progile.jpg" alt="profile picture" />
      </div>
    </div>
  );
};

export default Navbar;
