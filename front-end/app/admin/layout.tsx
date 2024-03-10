"use client";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

// here first we should check if the user is authenticated or not if not we must navigate user to admin login screen
// but for now we just check for pathname

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname == "/admin/login") {
    return <main>{children}</main>;
  } else {
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
}
