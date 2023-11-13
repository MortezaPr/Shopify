"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className="flex">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      {children}
    </main>
  );
}
