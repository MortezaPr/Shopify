"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Skeleton from "@/components/Skeleton";

const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Skeleton width="2rem" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdOutlineLightMode size={22} />
      ) : (
        <MdOutlineDarkMode size={22} />
      )}
    </button>
  );
};

export default ThemeToggle;
