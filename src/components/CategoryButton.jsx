import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

const CategoryButton = ({ image, category, title }) => {
  return (
    <div className="category">
      <ScrollAnimation>
        <Image
          src={image}
          alt={category}
          width={400}
          height={400}
          className="w-full h-[230px] rounded-lg"
        />
      </ScrollAnimation>

      <h4 className="categoryTitle">{title}</h4>
    </div>
  );
};

export default CategoryButton;
