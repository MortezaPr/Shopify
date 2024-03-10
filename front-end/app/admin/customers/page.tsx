import React from "react";
import { Customer, columns } from "./columns";
import { DataTable } from "../components/DataTable";

async function getUsers(): Promise<Customer[]> {
  const res = await fetch(
    "https://6553c03e5449cfda0f2f1f71.mockapi.io/customers"
  );
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
      <DataTable columns={columns} data={data} header="کاربران" />
    </div>
  );
}
