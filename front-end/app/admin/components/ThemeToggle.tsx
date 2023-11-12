// import "./DarkMode.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    localStorage.setItem("adminTheme", "dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  };

  const setLightMode = () => {
    localStorage.setItem("adminTheme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  };

  const toggleTheme = () => {
    if (!isDarkMode) {
      console.log("ea");
      setIsDarkMode(true);
      setDarkMode();
    } else {
      setIsDarkMode(false);
      setLightMode();
    }
  };

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {isDarkMode ? (
        <div className="dark:text-white">
          <LightModeIcon />
        </div>
      ) : (
        <div className="text-darker-bg">
          <MdOutlineDarkMode size={22} />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
