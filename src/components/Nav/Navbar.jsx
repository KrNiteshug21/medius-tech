import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import { navbar } from "./nav-data";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/img/logo.svg" alt="logo" width={60} height={60} />
          </Link>
          {navbar.map((nav) => (
            <NavItem key={nav.mainText} {...nav} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="border text-gray border-black/70 hover:border-gray-200 hover:bg-gray-200 hover:border-none rounded-full p-2">
            <Phone color="gray" />
          </button>
          <button className="hover:bg-gray-100 py-3 px-6 rounded-full">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
