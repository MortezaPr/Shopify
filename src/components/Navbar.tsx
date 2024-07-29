import Button from "@mui/material/Button";
import { Poppins } from "next/font/google";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Navbar() {
  return (
    <nav className="flex justify-center pt-5">
      <div className="fixed z-50 h-20 w-5/6 rounded-full bg-white bg-opacity-45 backdrop-blur-lg shadow-sm flex justify-between items-center px-10">
        <div className={`${poppins.className} text-primary pb-1 text-2xl sm:text-3xl`}>Shopify</div>
        <div className="hidden lg:flex gap-2">
          <div className="cursor-pointer mr-5 pt-1">
            <ShoppingCartIcon />
          </div>
          <Link href="/login">
            <div className="flex gap-2">
              <Button variant="contained">LOGIN</Button>
              <Button variant="outlined">SIGN UP</Button>
            </div>
          </Link>
        </div>
        <div className="lg:hidden cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}
