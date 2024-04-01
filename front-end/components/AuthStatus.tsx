import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Skeleton from "@/components/Skeleton";
import { GoTriangleDown } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { TbLogin } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";
import refreshToken from "@/actions/refreshToken";

import Link from "next/link";

const AuthStatus = () => {
  const [status, setStatus] = useState("loading");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token != null) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const currentTime = Math.floor(Date.now() / 1000); // get current time in seconds
      if (
        currentTime >= decodedToken.exp! ||
        decodedToken.exp! - currentTime <= 600
      ) {
        // token is expired or token is near to expire, refresh it
        const refresh = async () => {
          try {
            const response = await refreshToken();
            localStorage.setItem("accessToken", response.token);
            console.log(response.token);
            setStatus("authenticated");
          } catch (error) {
            setStatus("unauthenticated");
          }
        };
        refresh();
      } else {
        setStatus("authenticated");
      }
    } else {
      setStatus("unauthenticated");
    }
  }, []);

  if (status === "loading") return <Skeleton width="7rem" />;
  if (status === "unauthenticated")
    return (
      <Button
        variant="outline"
        className="bg-white dark:bg-darker-user border-gray-300 dark:border-darker-user"
      >
        <div className="flex gap-2" onClick={() => router.push("/login")}>
          <TbLogin size={22} />
          ورود | ثبت نام
        </div>
      </Button>
    );

  return (
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          style={{
            outline: "none",
          }}
        >
          <div className="flex gap-1">
            <IoPersonOutline size={22} />
            <GoTriangleDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:border-neutral-800 bg-opacity-60 backdrop-blur-lg">
          <DropdownMenuItem className="flex p-2">
            <Link href={"/profile"} className="flex gap-10 items-center p-2">
              <MdKeyboardArrowLeft size={20} />
              <div className="font-bold">مرتضی پوررمضان</div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="dark:bg-neutral-800" />

          <DropdownMenuItem>
            <Link href={"/profile"} className="flex gap-2 items-center p-2">
              سفارش ها
              <FiShoppingCart />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Link
              href={"/profile/lists"}
              className="flex gap-2 items-center p-2"
            >
              لیست ها
              <FaRegHeart />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <button className="flex gap-2 items-center p-2">
              خروج از حساب کاربری
              <RxExit />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthStatus;
