"use client";
import fetchPhones from "@/actions/fetchPhones";
import fetchProductImages from "@/actions/fetchProductImages";
import React, { useEffect, useState } from "react";
import Box from "@/app/Box";

export default function Home() {
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

  return (
    <main className="h-screen w-screen">
      <Box title={"موبایل های پرفروش"} items={phones} />
    </main>
  );
}
