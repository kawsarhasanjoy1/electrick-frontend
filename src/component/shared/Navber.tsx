"use client";
import { logo } from "@/constance/global";
import useAuth from "@/utils/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { SlLogin } from "react-icons/sl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token } = useAuth();
  const toggleMenu = () => setIsOpen(!isOpen);
  const isLogin = false;
  return (
    <header className="bg-blue-500 text-white shadow-md w-full z-50">
      <div className=" md:px-10 px-2 mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            priority
            className=" text-white"
            height={150}
            width={150}
            src={logo.trim()}
            alt="Restaurant Logo"
          />
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`text-lg bg-gray-900 z-10 md:bg-transparent fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-auto transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 ">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link href="/products" className="hover:text-gray-300 transition">
              Products
            </Link>
            <Link
              href="/collections"
              className="hover:text-gray-300 transition"
            >
              Blog
            </Link>

            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="relative">
            <FaHeart size={22} className="hover:text-red-400 transition" />
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart
              size={22}
              className="hover:text-green-400 transition"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </Link>
          <div className="hover:text-blue-400 transition">
            {token ? (
              <Link href={`/${user?.role}/profile`}>
                <FaUser size={22} />
              </Link>
            ) : (
              <Link href={"/login"}>
                <SlLogin size={22} />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
