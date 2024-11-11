"use client";
import Image from "next/image";
import SunSet from "../../public/sunset.jpg";
import MoreAboutButton from "@/components/AllButton";
import { FaArrowRight } from "react-icons/fa";
import ScrollToFadeInRight from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-10 p-5 mt-20 md:mt-0 md:p-10 lg:p-20 lg:h-screen  md:items-center">
      {/* left side image design */}

      <div className=" w-80 h-60 sm:h-96 m-auto shadow-md shadow-neutral-900 rounded-md overflow-hidden border-red-700 z-50 ">
        <Image
          src={SunSet}
          alt="jpg"
          height={500}
          width={500}
          className="w-full h-full object-right "
        />
      </div>

      {/* right side heading and text design */}
      <ScrollToFadeInRight>
        <div className=" text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[34px] md:leading-[48px] lg:leading-[62px] font-extrabold mt-5 mb-3">
            <span className=" text-yellow-500">- I AM Raju Haolader </span>
            <span className="ml-0 md:ml-16 lg:ml-24 block">WEB DESIGNER</span>
          </h1>

          <p className="text-base leading-6 md:leading-8 mt-3 mb-3">
            I am a Tunisian based web designer & front_end developer focused on
            crafting clean & user_friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <MoreAboutButton
            buttonText="about me"
            icon={<FaArrowRight />}
            path="/about"
          />
        </div>
      </ScrollToFadeInRight>
      {/* left side yellow color design */}
      <div className="w-full hidden lg:block  md:h-[190%] rotate-[-15deg] -top-[0] -left-3/4 bg-yellow-500 fixed"></div>
    </div>
  );
}
