"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginIcon from "@mui/icons-material/Login";
import localFont from "next/font/local";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Badge from "@mui/material/Badge";

const links = {
  محصولات: "/products",
  "درباره ما": "/",
  "تماس با ما": "/",
};

const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
});

export default function Sidebar() {
  const router = useRouter();
  const cookies = useCookies();
  const hasCookie = cookies.get("token");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div
        onClick={() => router.push("/")}
        className={`${poppins.className} text-primary mt-5 mb-10 text-2xl flex justify-center cursor-pointer`}
      >
        Shopify
      </div>

      <div className="flex flex-col items-center gap-4 mt-5 text-sm">
        {Object.entries(links).map(([key, value]) => (
          <Link key={key} href={value} className="w-full">
            <p className="text-lg hover:text-primary hover:font-semibold transition duration-300 w-full flex justify-between px-5">
              <p className="pr-2">{key}</p>
              <ArrowBackIosNewIcon fontSize="small" />
            </p>
          </Link>
        ))}
      </div>

      {!hasCookie ? (
        <div>
          <div className="my-5">
            <Divider />
          </div>
          <Box sx={{ width: 200, ml: 3 }}>
            <Link href="/login">
              <Button variant="outlined" color="primary" fullWidth>
                <div className="flex gap-2">
                  <LoginIcon />
                  <p> ورود | ثبت‌نام</p>
                </div>
              </Button>
            </Link>
          </Box>
        </div>
      ) : (
        <div className="mx-5">
          <div className="my-5">
            <Divider />
          </div>
          <div className="cursor-pointer flex xs:hidden py-2 px-3 bg-gray-100 rounded-md items-center justify-center gap-2">
            <Badge
              badgeContent={"۲"}
              color="primary"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <div className="block md:hidden">
                <ShoppingBagOutlinedIcon fontSize="small" />
              </div>
              <div className="hidden md:block">
                <ShoppingBagOutlinedIcon fontSize="medium" />
              </div>
            </Badge>
            <p className="text-sm md:text-base">سبد خرید</p>
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
