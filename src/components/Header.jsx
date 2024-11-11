import React from "react";

const Header = ({ title, pageName, content }) => {
  return (
    <div className="w-full relative">
      <h2 className="absolute top-12 sm:left-[50%] sm:-translate-x-[50%] opacity-5 text-5xl md:text-8xl lg:text-9xl font-extrabold uppercase">
        {title}
      </h2>
      <h3 className="px-3 sm:text-center text-2xl md:text-5xl lg:text-7xl font-extrabold py-14 md:py-20 m-auto uppercase">
        {content}
        <span className="text-yellow-500">{pageName}</span>
      </h3>
    </div>
  );
};

export default Header;
