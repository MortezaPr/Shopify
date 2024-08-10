"use client";

import Lottie from "lottie-react";
import Animation from "../../public/Animation.json";

export default function NotFound() {
  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center">
      <Lottie animationData={Animation} />
      <p className="text-lg sm:text-2xl font-bold">
        صفحه ی مورد نظر یافت نشد :(
      </p>
    </div>
  );
}
