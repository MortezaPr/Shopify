"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import useSearching from "@/hooks/useSearching";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Providers } from "./providers";
import { useTheme } from "next-themes";

const iranSans = localFont({
  src: [
    {
      path: "./assets/fonts/IRANSansX-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX-5-Medium.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./assets/fonts/IRANSansX-7-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSearching, onCloseSearch } = useSearching();
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Get the theme from local storage
    const theme = localStorage.getItem("theme");

    // If the theme in local storage is 'dark', add the 'dark' class to the body
    if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      {pathname.startsWith("/admin/") || pathname == "/login" ? (
        <body className={`${iranSans.className} dark:bg-darker-bg`}>
          <Providers>{children}</Providers>
        </body>
      ) : (
        <body className={`${iranSans.className} dark:bg-darker-user`}>
          <Providers>
            <Navbar />
            <div
              className={`${
                isSearching ? "absolute bg-blackOverlay min-h-screen" : ""
              }`}
            >
              <div
                className={`h-full flex  ${isSearching ? "z-40" : ""} `}
                onClick={onCloseSearch}
              >
                <div className={`${isSearching ? "-z-10" : ""}`}>
                  {children}
                </div>
              </div>
            </div>
          </Providers>
        </body>
      )}
    </html>
  );
}
