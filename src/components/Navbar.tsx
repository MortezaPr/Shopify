import Button from "@mui/material/Button";
import localFont from "next/font/local";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { cookies } from "next/headers";

const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
});

export default function Navbar() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("token");
  return (
    <nav className="flex flex-row-reverse justify-center pt-5">
      <div className="fixed h-20 w-5/6 rounded-full bg-white bg-opacity-45 backdrop-blur-lg shadow-sm flex flex-row-reverse lg:flex-row justify-between items-center px-10">
        <div
          className={`${poppins.className} text-primary pb-1 text-2xl sm:text-3xl`}
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
