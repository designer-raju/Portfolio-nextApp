import Link from "next/link";
import React from "react";

// all pages common button design is here
// **********************
const MoreAboutButton = ({ path, buttonText, icon }) => {
  return (
    <div>
      <Link href={path} className="home-btn">
        <span className="relative z-10 font-bold transition-all">
          {buttonText}
        </span>
        <span className="absolute top-0 right-0 bottom-0 w-10 h-10  bg-[#ffb400] rounded-full ">
          <span className="absolute right-3 top-3">{icon}</span>
        </span>
      </Link>
    </div>
  );
};
export default MoreAboutButton;
