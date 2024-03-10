"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import ThemeToggle from "../../components/ThemeToggle";
import { links, icons } from "./components/LinksAndIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import useSidebarToggle from "@/hooks/useSidebarToggle";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useSidebarToggle();

  const handleToggle = (isOpen: boolean) => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <div className="w-full fixed flex items-center justify-between shadow-md py-3 px-5 bg-white dark:bg-dark-bg z-40">
      <div
        className={`flex dark:text-white ${isOpen ? "md:mr-28" : "md:mr-40"}`}
      >
        <CgMenuRightAlt
          size={22}
          className="cursor-pointer"
          onClick={() => handleToggle(isOpen)}
        />
      </div>
      {isOpen && (
        <div className="flex md:hidden">
          <div className="fixed top-0 right-0 bottom-0 w-1/2 h-full bg-white dark:bg-dark-bg dark:text-white overflow-y-auto shadow-md z-10 animate-slide-in rounded-md">
            <div className="absolute w-full flex justify-end items-center p-2 ">
              <AiFillCloseCircle
                onClick={() => handleToggle(isOpen)}
                className="cursor-pointer rounded-xl hover:shadow-sm"
              />
            </div>
            <div className="mt-14 mr-5 text-lg flex flex-col gap-6">
              {Object.entries(links).map(([key, value]) => (
                <li
                  key={key}
                  className={
                    pathname == value
                      ? "bg-my-purple text-white py-2 rounded-lg h-10 w-4/5 flex justify-center gap-5 shadow-md"
                      : "h-10 w-4/5 px-10 flex flex-col items-center"
                  }
                >
                  <Link href={value}>
                    <div
                      className={`flex justify-center items-center gap-3 ${
                        !(pathname == value)
                          ? "hover:bg-gray-100 dark:hover:bg-darker-bg w-64 py-2 rounded-lg"
                          : ""
                      }`}
                    >
                      {icons[key]}
                      {key}
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div
          onClick={() => router.push("/admin/settings")}
          className="text-darker-bg dark:text-white"
        >
          <FiSettings fontSize="small" style={{ cursor: "pointer" }} />
        </div>
        <p className="text-sm dark:text-white">مرتضی پوررمضان</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
