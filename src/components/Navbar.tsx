// Navbar Component
"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-sans">
          <span className="text-blue-100">Acme</span>
          <span className="text-white">Bookkeeping</span>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 right-0 bg-blue-800 py-4 px-6 shadow-lg md:shadow-none"
              : "hidden"
          } md:flex space-x-8 md:relative md:top-0 md:bg-transparent md:py-0 md:px-0`}
        >
          <Link
            href="/"
            className="block py-2 md:py-0 text-blue-100 hover:text-white transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 md:py-0 text-blue-100 hover:text-white transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block py-2 md:py-0 text-blue-100 hover:text-white transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block py-2 md:py-0 text-blue-100 hover:text-white transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
