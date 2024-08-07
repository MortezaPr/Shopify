"use client";
import Button from "@mui/material/Button";
import localFont from "next/font/local";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
});

const links = {
  محصولات: "/products",
  "درباره ما": "/",
  "تماس با ما": "/",
};

export default function Navbar() {
  const router = useRouter();
  const cookies = useCookies();
  const hasCookie = cookies.get("token");

  const productCount = useSelector((state: RootState) =>
    state.shoppingCart.products.reduce(
      (total, product) => total + product.count,
      0
    )
  );

  return (
    <nav className="flex flex-row-reverse justify-center z-50 fixed w-full h-20">
      <div className="h-full w-full bg-white bg-opacity-85 backdrop-blur-lg shadow-sm flex flex-row-reverse lg:flex-row justify-between items-center px-5">
        <div
          onClick={() => router.push("/")}
          className={`${poppins.className} text-primary pb-1 text-2xl sm:text-3xl cursor-pointer`}
        >
          Shopify
        </div>
        <div className="flex flex-row-reverse items-center lg:flex-row gap-2">
          <div className="hidden lg:flex gap-7 text-sm">
            {Object.entries(links).map(([key, value]) => (
              <Link key={key} href={value}>
                <p className="text-lg hover:text-primary hover:font-semibold transition duration-300">
                  {key}
                </p>
              </Link>
            ))}
          </div>

          {hasCookie && (
            <Link
              href="/shopping-cart"
              className="cursor-pointer hidden xs:flex lg:mr-7 py-2 px-3 lg:px-7 lg:py-[0.65rem] bg-gray-100 rounded-md items-center gap-2"
            >
              <Badge
                badgeContent={productCount}
                color="primary"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <div className="block md:hidden">
                  <ShoppingBagOutlinedIcon fontSize="small" />
                </div>
                <div className="hidden md:block">
                  <ShoppingBagOutlinedIcon fontSize="medium" />
                </div>
              </Badge>
              <p className="text-sm md:text-base">سبد خرید</p>
            </Link>
          )}

          {!hasCookie && (
            <div className="hidden lg:block mr-5">
              <Link href="/login">
                <Button variant="outlined" color="primary">
                  <div className="flex gap-2">
                    <LoginIcon />
                    <p> ورود | ثبت‌نام</p>
                  </div>
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
