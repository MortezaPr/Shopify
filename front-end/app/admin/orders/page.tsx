import React from "react";
import { Orders, columns } from "./columns";
import { DataTable } from "@/components/DataTable";

async function getUsers(): Promise<Orders[]> {
  const res = await fetch("https://65551c5e63cafc694fe7722e.mockapi.io/orders");
  const data = await res.json();
  return data;
}

export default async function Customers() {
  const data = await getUsers();

  return (
    <div
      className="h-screens overflow-x-auto grid place-items-center mt-14 pt-14"
      dir="ltr"
    >
      <DataTable columns={columns} data={data} header="سفارشات" />
    </div>
  );
}
