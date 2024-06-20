"use client";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import heart from "@/public/images/heart.png";
import useLikedItems from "@/hooks/useLikedItems";
import fetchPhones from "@/actions/fetchPhones";
import fetchProductImages from "@/actions/fetchProductImages";
import { useEffect, useState } from "react";

let getLikedItems = (likes, phones) => {
  return phones.filter((phone) => likes.includes(phone.id));
};

const Lists = () => {
  const { likes } = useLikedItems();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPhones = await fetchPhones();

      // Fetch images for each phone and add to its object
      const phonesWithImages = await Promise.all(
        fetchedPhones.map(async (phone) => {
          const image = await fetchProductImages(phone.id); // Assuming fetchProductImages returns the image URL
          return { ...phone, image }; // Add the image URL to the phone object
        })
      );

      console.log(phonesWithImages);

      setPhones(phonesWithImages);
    };

    fetchData();
  }, []);
  let likeItems = getLikedItems(likes, phones);
  return (
    <div
      className={`h-screen lg:h-auto lg:mx-0 lg:mt-0 bg-[#f1f5f7] dark:bg-darker-user flex flex-col lg:shadow-sm lg:border-[1.5px] lg:border-gray-200 lg:dark:border-none lg:col-span-5 lg:rounded-lg lg:bg-white lg:dark:bg-dark-user`}
    >
      <div className="lg:hidden bg-white dark:bg-dark-user flex items-center gap-3 pr-5">
        <Link href={"/profile"}>
          <IoArrowForward size={22} />
        </Link>

        <div>
          <h2 className="py-5 text-base">لیست های من</h2>
        </div>
      </div>
      <div className="hidden lg:block pr-5">
        <h1 className="pt-5 text-lg">لیست های من</h1>
        <div className="hidden lg:block h-[2px] w-[5.5rem] rounded-xl bg-my-purple mt-2"></div>
      </div>
      {likes.length == 0 ? (
        <div className="hidden lg:block">
          <div className="h-80 flex flex-col justify-center items-center">
            <Image src={heart} alt="lists" width={120} height={120} />
            <p>لیستی موجود نیست!</p>
          </div>
        </div>
      ) : (
        <div className="h-auto hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto">
          {likeItems.map((likedItem) => (
            <Link
              href={`/product/${likedItem.slug}`}
              className="mt-10 mr-10"
              key={likedItem.id}
            >
              <div className="lg:w-[calc(100vw-80vw)] xl:w-[calc(100vw-83vw)] 2xl:w-[calc(100vw-87vw)] h-[19rem] border-slate-200 dark:border-neutral-800 border-2 rounded-lg">
                <div className="flex justify-center pt-2">
                  <Image
                    src={likedItem.image.image_url}
                    alt="image"
                    width={160}
                    height={160}
                  />
                </div>
                <p className="pt-5 px-7 text-sm max-w-[20rem] overflow-hidden line-clamp-2">
                  {likedItem.title}
                </p>
                <p className="flex justify-center text-sm pt-4">
                  {likedItem.price.toLocaleString("fa")} تومان
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="lg:hidden h-auto mt-3 bg-white dark:bg-dark-user pt-5 pr-5">
        {likes.length == 0 ? (
          <div className="h-[40rem] flex flex-col justify-center items-center">
            <Image src={heart} alt="lists" width={120} height={120} />
            <p>لیستی موجود نیست!</p>
          </div>
        ) : (
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
            {likeItems.map((likedItem) => (
              <Link
                href={`/product/${likedItem.slug}`}
                className="mt-10"
                key={likedItem.id}
              >
                <div className="w-[calc(100vw-50vw)] sm:w-[calc(100vw-65vw)] md:w-[calc(100vw-75vw)] h-[19rem] sm:h-[15rem] border-slate-200 dark:border-neutral-800 border-2 rounded-lg">
                  <div className="flex justify-center pt-5 sm:pt-2">
                    <Image
                      src={likedItem.image}
                      alt="image"
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="pt-10 sm:pt-5 px-7 text-sm max-w-[20rem] overflow-hidden line-clamp-2">
                    {likedItem.name}
                  </p>
                  <p className="flex justify-center text-sm pt-4">
                    {likedItem.price.toLocaleString("fa")} تومان
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="pb-28"></div>
      </div>
    </div>
  );
};

export default Lists;
