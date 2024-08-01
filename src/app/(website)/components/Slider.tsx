"use client";

import Image from "next/image";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "swiper/css";

export default function Slider() {
  return (
    <section>
      <div className="">
        <div className="hidden mg:block">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full w-full rounded-xl "
          >
            {images.slice(0, 4).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center rounded-xl">
                  <Image src={image.src} alt={image.alt} />
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
                  <Image src={image.src} alt={image.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
