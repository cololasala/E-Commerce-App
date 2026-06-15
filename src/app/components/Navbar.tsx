import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full justify-between border-b border-gray-200 pb-4">
      <Link href="/home" className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={36}
          height={36}
          className="W-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium">Full course</p>
      </Link>

      <div className="flex items-center gap-4">
        <SearchBar />
        <Link href="/home">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCart className="w-4 h-4 text-gray-600" />

        <Link href="/login" />
      </div>
    </nav>
  );
};

export default Navbar;
