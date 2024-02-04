// "use client";

// import { useRef } from "react";
import getPhones from "@/actions/getPhones";
import Card from "@/components/Card";
import { useTheme } from "next-themes";

async function getPhonesFromServer() {
  const res = await fetch("http://localhost:8000/item/mobile/list", {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const phones = getPhones();
  const phones2 = await getPhonesFromServer();
  console.log(phones2);



  return (
    <main className="h-screen w-screen">
      <Card phones={phones} />
    </main>
  );
}
