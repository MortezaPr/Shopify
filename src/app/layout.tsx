import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CookiesProvider } from "next-client-cookies/server";
import theme from "../theme";
import { StoreProvider } from "@/store/StoreProvider";

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansX-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansX-5-Medium.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/IRANSansX-7-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  manifest:
    process.env.NODE_ENV === "production" ? "/manifest.json" : undefined,
  title: "Shopify",
  description: "An e-commerce platform to build and manage online stores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <html lang="en" dir="rtl">
            <body
              className={`${iranSans.className} bg-base-light dark:bg-base-dark`}
            >
              <CookiesProvider>{children}</CookiesProvider>
            </body>
          </html>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
}
