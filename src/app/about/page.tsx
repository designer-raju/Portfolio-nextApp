"use client";
import React from "react";
import Header from "@/components/Header";
import { FaBriefcase, FaDownload } from "react-icons/fa";
import { AboutInfo, AboutInfoRight } from "../AllPageItems/allItems";
import ScrollToFadeInRight from "@/components/ScrollAnimation";
import DownloadButton from "@/components/DownloadButton";
export default function About() {
  return (
    <div className="mb-20 lg:mb-14">
      <Header title="Resume" content="About" pageName="Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10">
        <ScrollToFadeInRight>
          <h3 className="uppercase font-bold pb-2 sm:pb-5 text-2xl sm:text-2xl">
            prsonal infos
          </h3>
          <ul className="columns-2 mb-3 md:mb-0">
            {AboutInfo.map((sub, index) => (
              <li
                key={index}
                className="capitalize pb-2 sm:pb-4 text-sm sm:text-base "
              >
                <span>{sub.title} : </span>
                <span className="font-bold">{sub.content}</span>
              </li>
            ))}
            {AboutInfoRight.map((sub, index) => (
              <li
                key={index}
                className="capitalize pb-2 sm:pb-4 text-sm sm:text-base "
              >
                <span>{sub.title} &nbsp;: </span>
                <span className="font-bold">{sub.content}</span>
              </li>
            ))}
          </ul>
          <DownloadButton />
        </ScrollToFadeInRight>
        <ScrollToFadeInRight>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
            <div className=" border border-[#69696952] rounded-xl py-5 ">
              <h3 className="textStyle relative text-5xl md:text-6xl font-bold pt-5 pl-10 text-yellow-400">
                04
              </h3>
              <p className="paraStyle relative uppercase text-lg pl-20">
                years of <span className="block">exparince</span>
              </p>
            </div>

            <div className=" border border-[#69696952] rounded-xl py-5 ">
              <h3 className="textStyle relative text-5xl md:text-6xl font-bold pt-5 pl-10 text-yellow-400">
                97
              </h3>
              <p className="paraStyle relative uppercase text-lg pl-20">
                complate<span className="block">project</span>
              </p>
            </div>

            <div className=" border border-[#69696952] rounded-xl py-5 ">
              <h3 className="textStyle relative text-5xl md:text-6xl font-bold pt-5 pl-10 text-yellow-400">
                83
              </h3>
              <p className="paraStyle relative uppercase text-lg pl-20">
                happy <span className="block">customers</span>
              </p>
            </div>
            <div className=" border border-[#69696952] rounded-xl py-5 ">
              <h3 className="textStyle relative text-5xl md:text-6xl font-bold pt-5 pl-10 text-yellow-400">
                53
              </h3>
              <p className="paraStyle relative uppercase text-lg pl-20">
                awards <span className="block">own</span>
              </p>
            </div>
          </div>
        </ScrollToFadeInRight>
      </div>

      <hr className="w-[40%] m-auto my-10  border-t-[#97959552] " />
      <ScrollToFadeInRight>
        <div className="w-full px-5 lg:px-10">
          <h4 className="px-3 sm:text-center text-lg sm:text-2xl md:text-3xl font-extrabold pb-12 md:pb-20 m-auto uppercase">
            my Skill
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4">
            <div className="mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  25%
                </span>
                <span className="p25 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                html
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  89%
                </span>{" "}
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill89 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                css
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  70%
                </span>
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill70 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                javascript
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  66%
                </span>
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill66 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                jquery
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  95%
                </span>
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill95 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                taildwind css
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  50%
                </span>
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill50 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                react js
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  65%
                </span>
                <span className="p89 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill65 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                next js
              </h3>
            </div>
            <div className=" mb-5">
              <div className="relative w-28 h-28 m-auto border-8 border-black bg-clip-content rounded-full ">
                <span className="absolute top-[28%] left-[21%] text-3xl">
                  45%
                </span>
                <span className="p45 absolute -top-[8px] -left-[8px] w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full "></span>
                <span className="fill45 absolute w-28 h-28 bg-clip-content border-8 border-yellow-500 rounded-full top-[-8px] left-[-8px] "></span>
              </div>
              <h3 className="text-bold uppercase pt-3 pb-8 text-2xl text-center ">
                node js
              </h3>
            </div>
          </div>
        </div>
      </ScrollToFadeInRight>
      <hr className="w-[40%] m-auto my-10  border-t-[#97959552] " />
      <div className="px-6 pb-10 sm:px-16">
        <h4 className="px-1 sm:px-3 sm:text-center text-lg sm:text-2xl md:text-3xl font-extrabold pb-8 md:pb-10 m-auto uppercase">
          experience & education
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="px-5 sm:px-12 relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
          <div className="px-5 sm:px-12  relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
          <div className="px-5 sm:px-12  relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
          <div className="px-5 sm:px-12  relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
          <div className="px-5 sm:px-12  relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
          <div className="px-5 sm:px-12  relative border-l border-gray-400">
            <i className="absolute top-[-2px] -left-5 p-3 rounded-full bg-yellow-500">
              <FaBriefcase />
            </i>
            <span className="px-3 rounded-full bg-gray-400 uppercase">
              2024-present
            </span>
            <h5 className="my-4 text-2xl uppercase">
              web developer -<span className="text-lg "> mind practice</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, eos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
