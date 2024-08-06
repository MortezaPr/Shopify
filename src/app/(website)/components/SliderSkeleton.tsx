import React from "react";
import Skeleton from "@/components/Skeleton";

const SliderSkeleton = () => {
  return <Skeleton className="h-52 xs:h-80 sm:h-96 md:h-[30rem] mg:h-52 lg:h-60 xl:h-72 2xl:h-80" borderRadius={10} />;
};

export default SliderSkeleton;
