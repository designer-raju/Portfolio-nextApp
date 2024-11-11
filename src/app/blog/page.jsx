"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { BlogItem } from "../AllPageItems/allItems";
import Image from "next/image";
import ScrollToFadeInRight from "@/components/ScrollAnimation";
import {
  FaCalendar,
  FaCalendarAlt,
  FaQuoteLeft,
  FaTag,
  FaTimes,
  FaUser,
} from "react-icons/fa";

export default function Blog() {
  const [file, setFile] = useState(null);
  return (
    <div className="mb-20 lg:mb-14">
      <Header title="posts" content="my" pageName="Blog" />
      <ScrollToFadeInRight>
        <div className="relative grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-10 px-5 lg:px-16 justify-between">
          {BlogItem.map((file, index) => (
            <ul
              className="group cursor-pointer  rounded-xl sm:mx-0 bg-[#e2e3e585]"
              key={index}
              onClick={() => setFile(file)}
            >
              <li className="h-56 overflow-hidden border-b-8 border-yellow-400 rounded-t-xl">
                {file?.type === "image" ? (
                  <Image
                    src={file.image}
                    alt="jpg"
                    width={500}
                    height={500}
                    className=" w-full min-h-56  group-hover:scale-110 translate duration-500 ease-in-out"
                  />
                ) : (
                  ""
                )}
              </li>

              <h3 className="group-hover:text-yellow-400 transition-all duration-300 pt-8 pl-3 py-2 lg:py-3  text-xl lg:text-2xl font-bold">
                {file.heading}
              </h3>
              <p className="px-3 pb-8">{file.paragraph}</p>
            </ul>
          ))}
        </div>
        <div
          className="fixed top-0 left-0 w-full h-full object-contain border border-white   z-20 bg-black hidden "
          style={{ display: file ? "block" : "none" }}
        >
          <span
            className="absolute top-5 right-5 text-2xl font-bold cursor-pointer text-white hover:text-yellow-400 z-20"
            onClick={() => setFile(null)}
          >
            <FaTimes />
          </span>
          <div className="w-2/3 h-[70vh] m-auto overflow-y-auto z-20 border rounded-xl mt-14  bg-[#bdbabad1] px-20">
            <Header title="post" content="post" pageName="details" />
            <div className="flex">
              <span className="flex pr-2">
                <FaUser className="text-yellow-400 m-2 cursor-pointer" />
                <span>{file?.user}</span>
              </span>

              <span className="flex pr-2 ">
                <FaCalendarAlt className="text-yellow-400 m-2 cursor-pointer" />
                <span>{file?.date}</span>
              </span>
              <span className="flex pr-2">
                <FaTag className="text-yellow-400 m-2 cursor-pointer" />
                <span>{file?.lang}</span>
              </span>
            </div>
            <h3 className=" text-2xl lg:text-3xl font-bold py-5">
              {file?.heading}
            </h3>
            {file?.type === "image" ? (
              <Image
                src={file?.image}
                alt="jpg"
                width={500}
                height={500}
                className="w-full h-auto rounded-md pb-5"
              />
            ) : (
              ""
            )}
            <p className="pb-10 text-md font-bold ">{file?.details}</p>
            <p className="pb-10 text-xl font-bold flex">
              <span className="text-5xl ">
                <FaQuoteLeft className="pb-3 pr-3" />
              </span>
              {file?.hilight}
            </p>
            <p className="pb-10 text-md font-bold ">{file?.details}</p>
            <p className="pb-10 text-md font-bold ">{file?.details2}</p>
          </div>
        </div>
      </ScrollToFadeInRight>
    </div>
  );
}
