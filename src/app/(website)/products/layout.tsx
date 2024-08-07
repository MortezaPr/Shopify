"use client";

import { usePathname } from "next/navigation";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  const marginTopClass = pathname.endsWith("/products")
    ? "mt-32"
    : pathname.match(/\/products\/\d+$/)
    ? "mt-16"
    : "";

  return <main className={marginTopClass}>{children}</main>;
}
