"use client";
import React from "react";
import Header from "@/components/Header";
import { IoIosSend } from "react-icons/io";

import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaMap,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import ScrollToFadeInRight from "@/components/ScrollAnimation";
import MoreAboutButton from "@/components/AllButton";
export default function contact() {
  return (
    <div className="mb-20 lg:mb-14">
      <Header title="contact" content="get in" pageName="Touch" />
      <ScrollToFadeInRight>
        <div className="grid grid-cols-3 gap-14 lg:gap-28 justify-center px-5 lg:px-20 mb-20">
          <div className="col-span-3 lg:col-span-1">
            <h3 className="uppercase text-3xl font-bold pb-3">
              do not be shy !
            </h3>
            <p className="pb-4">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <p className="relative pl-14 pb-4 font-bold text-sm md:text-xl">
              <i className="text-2xl md:text-4xl  mr-3 absolute left-2 top-1 text-yellow-400">
                <FaMap />
              </i>
              <span className="block pt-1 uppercase font-normal">
                Address point
              </span>
              123 Stree New York City , United States Of America 750065.
            </p>
            <p className="relative pl-14 pb-4 font-bold text-sm md:text-xl">
              <i className="text-2xl md:text-4xl  mr-3 absolute left-2 top-1 text-yellow-400">
                <FaEnvelopeOpen />
              </i>
              <span className="block pt-1 uppercase font-normal ">mail me</span>
              mdonik194@gmail.com
            </p>
            <p className="relative pl-14 pb-4 font-bold text-sm md:text-xl">
              <i className="text-2xl md:text-4xl  mr-3 absolute left-2 top-1 text-yellow-400">
                <FaPhoneAlt />
              </i>
              <span className="block pt-1 uppercase font-normal ">call me</span>
              01998722194
            </p>
            <div className="w-full h-auto flex">
              <Link
                href="https://www.facebook.com/"
                className="rounded-full p-3 bg-[#7977775c]  cursor-pointer hover:bg-yellow-400 transition-all mr-3"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                className="rounded-full p-3 bg-[#7977775c]  cursor-pointer hover:bg-yellow-400 transition-all  mr-3"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com/"
                className="rounded-full  p-3 bg-[#7977775c]   cursor-pointer hover:bg-yellow-400 transition-all  mr-3"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://youtube.com"
                className="rounded-full p-3 bg-[#7977775c]  cursor-pointer hover:bg-yellow-400  transition-all mr-3"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border rounded-full px-4 py-2  mb-5"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-full px-4 py-2 mb-5"
            />
            <input
              type="text"
              placeholder="Your Subject"
              required
              className="w-full border rounded-full px-4 py-2 mb-5"
            />
            <textarea
              name="massege"
              placeholder="Your Message"
              required
              className="w-full rounded border p-4 mb-6"
            ></textarea>
            <MoreAboutButton
              buttonText="message"
              icon={<IoIosSend />}
              path="/contact"
            />
          </div>
        </div>
      </ScrollToFadeInRight>
    </div>
  );
}
