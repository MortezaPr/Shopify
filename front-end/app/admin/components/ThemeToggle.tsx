// import "./DarkMode.css";
"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import useTheme from "@/hooks/useTheme";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { onDark, onLight } = useTheme();

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
      setIsDarkMode(true);
      setDarkMode();
      onDark();
    } else {
      setIsDarkMode(false);
      setLightMode();
      onLight();
    }
  };

  return (
    <div onClick={toggleTheme}>
      {isDarkMode ? (
        <div className="dark:text-white cursor-pointer">
          <MdOutlineLightMode size={22} />
        </div>
      ) : (
        <div className="text-darker-bg cursor-pointer">
          <MdOutlineDarkMode size={22} />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
