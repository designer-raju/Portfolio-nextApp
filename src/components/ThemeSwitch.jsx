"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import PageLoader from "../components/PageLoader";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      onClick={toggleMenu}
      className="fixed top-7 right-6 md:right-5 p-4 rounded-full bg-gray-500 text-white  cursor-pointer  hover:bg-amber-500 transition-all z-20"
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ThemeSwitch;
