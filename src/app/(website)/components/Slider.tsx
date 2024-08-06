"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/lib/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SliderSkeleton from "./SliderSkeleton";

export default function Slider() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    console.log("Image loaded");
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) {
    return (
      <div className="h-full">
        <SliderSkeleton />
      </div>
    );
  }

  return (
    <section>
      <div>
        <div className="hidden mg:block">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full rounded-xl"
          >
            {images.slice(0, 4).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    onLoadingComplete={handleImageLoad}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block mg:hidden">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full rounded-xl"
          >
            {images.slice(4, 8).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    onLoad={handleImageLoad}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
