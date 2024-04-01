"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";

const iranSans = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansX-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansX-5-Medium.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/IRANSansX-7-Bold.woff2",
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
  const pathname = usePathname();

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
            {children}
          </Providers>
        </body>
      )}
    </html>
  );
}
