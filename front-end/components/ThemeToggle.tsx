// import "./DarkMode.css";
"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div onClick={toggleTheme}>
      {isClient && resolvedTheme == "dark" ? (
        <div className="text-white cursor-pointer">
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

export default ThemeToggle;
