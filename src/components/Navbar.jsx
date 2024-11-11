"use client";
import React from "react";
import Link from "next/link";
import { NavbarItems } from "@/app/AllPageItems/allItems";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="fixed-menu ">
      {NavbarItems.map((item, index) => (
        <Link href={item.path} key={index} className="text-xl">
          <li className={`main-menu ${pathName === item.path ? "active" : ""}`}>
            {item.icon}

            <h3 className="icon-box">{item.text}</h3>
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
