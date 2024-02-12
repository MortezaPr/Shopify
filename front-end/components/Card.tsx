import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface CardProps {
  image: StaticImageData;
  name: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <div className="hover:scale-105 hover:shadow-lg transition-all cursor-pointer shadow-sm h-96 w-[20rem] lg:w-[19rem] desktop1:w-[18rem] desktop2:w-[17rem] bg-white dark:bg-dark-user border-[1px] border-gray-300 dark:border-neutral-800 rounded">
      <div className="flex justify-center pt-2">
        <Image
          src={image}
          alt="image of the product"
          width={200}
          height={200}
          priority
        />
      </div>
      <p className="pt-5 px-5 text-sm max-w-[20rem] overflow-hidden line-clamp-2">
        {name}
      </p>
      <p className="flex justify-center text-sm pt-16">
        {price.toLocaleString("fa")} تومان
      </p>
    </div>
  );
};

export default Card;
