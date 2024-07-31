"use client";
import Button from "@mui/material/Button";
import localFont from "next/font/local";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
});

export default function Navbar() {
  const router = useRouter();
  const cookies = useCookies();
  const hasCookie = cookies.get("token");
  return (
    <nav className="flex flex-row-reverse justify-center z-50 fixed w-full h-20">
      <div className="h-full w-full bg-white bg-opacity-85 backdrop-blur-lg shadow-md flex flex-row-reverse lg:flex-row justify-between items-center px-10">
        <div
          onClick={() => router.push("/")}
          className={`${poppins.className} text-primary pb-1 text-2xl sm:text-3xl cursor-pointer`}
        >
          Shopify
        </div>
        <div className="flex flex-row-reverse lg:flex-row gap-2">
          {hasCookie && (
            <div className="cursor-pointer mr-2 lg:ml-5 pt-1">
              <ShoppingCartIcon />
            </div>
          )}

          {!hasCookie && (
            <div className="hidden lg:block">
              <Link href="/login">
                <Button variant="outlined" color="primary">
                  ورود | ثبت‌نام
                </Button>
              </Link>
            </div>
          )}

          <div className="lg:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </nav>
  );
}
