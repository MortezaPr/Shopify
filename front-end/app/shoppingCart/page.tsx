import React from "react";
import shopping from "@/public/images/shopping.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={shopping}
          width={200}
          height={200}
          alt="empty shopping cart"
        />
        <p className="pt-5 text-lg dark:text-white">سبد خرید خالی است!</p>
      </div>{" "}
    </div>
  );
};

export default page;
