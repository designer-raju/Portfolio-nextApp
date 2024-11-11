"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryButton from "../../components/CategoryButton";
import { FilteringData } from "../AllPageItems/allItems";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (e) => {
    setSelectedFilter(e);
  };

  const filteredImages = FilteringData.filter((image) =>
    selectedFilter === "all" ? true : image.category === selectedFilter
  );
  return (
    <div className="mb-20 lg:mb-14">
      <Header title="work" content="my" pageName="portfolio" />
      <div className="w-full m-auto  mb-20 lg:mb-14">
        <div className="md:col-span-2 lg:col-span-3 text-center mb-5">
          <ul className="flex justify-center ">
            <li
              className={`uppercase cursor-pointer font-bold p-2 hover:text-yellow-400 transition-all ${
                selectedFilter === "all" ? " text-yellow-400" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              all
            </li>
            <li
              className={`uppercase cursor-pointer font-bold p-2 hover:text-yellow-400 transition-all ${
                selectedFilter === "html" ? " text-yellow-400" : ""
              }`}
              onClick={() => handleFilterChange("html")}
            >
              Html
            </li>
            <li
              className={`uppercase cursor-pointer font-bold p-2 hover:text-yellow-400 transition-all ${
                selectedFilter === "react" ? " text-yellow-400" : ""
              }`}
              onClick={() => handleFilterChange("react")}
            >
              React
            </li>
            <li
              className={`uppercase cursor-pointer font-bold p-2 hover:text-yellow-400 transition-all ${
                selectedFilter === "next" ? " text-yellow-400" : ""
              }`}
              onClick={() => handleFilterChange("next")}
            >
              Nextjs
            </li>
            <li
              className={`uppercase cursor-pointer font-bold p-2 hover:text-yellow-400 transition-all ${
                selectedFilter === "runing" ? " text-yellow-400" : ""
              }`}
              onClick={() => handleFilterChange("runing")}
            >
              Runing
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 px-5 lg:px-10 mb-20">
          {filteredImages.map((image) => (
            <CategoryButton
              key={image.id}
              image={image.image}
              title={image.title}
              category={image.category}
              isSelected={selectedFilter === image.category}
              onClick={() => handleFilterChange(image.category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
