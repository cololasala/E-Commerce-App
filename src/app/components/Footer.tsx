import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:items-start bg-gray-800 p-8 rounded-lg gap-4 justify-between">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="W-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-sm text-gray-400">© 2026 Full course.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-white">Links</p>
        <Link href="./home" className="text-sm text-gray-400">
          Home page
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Contact
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Terms of service
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Privacy policy
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-white">Products</p>
        <Link href="/" className="text-sm text-gray-400">
          All products
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          New products
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          New arrivals
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Best sellers
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Sales
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-white">Company</p>
        <Link href="/" className="text-sm text-gray-400">
          About
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Contact
        </Link>
        <Link href="/" className="text-sm text-gray-400">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Footer;
