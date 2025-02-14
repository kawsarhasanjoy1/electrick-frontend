"use client";
import { logo } from "@/constance/global";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r md:px-10 px-2 from-blue-700 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto   py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={logo.trim()}
                alt="Logo"
                height={150}
                width={150}
                className="w-40"
              />
            </Link>
            <p className="text-gray-200 mb-4">
              Discover our premium LCD displays and accessories, crafted for
              performance and style.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors"
              >
                <FaTwitter size={16} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors"
              >
                <FaLinkedinIn size={16} />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/lcd-monitors"
                  className="text-white hover:text-yellow-500 transition"
                >
                  LCD Monitors
                </Link>
              </li>
              <li>
                <Link
                  href="/lcd-tvs"
                  className="text-white hover:text-yellow-500 transition"
                >
                  LCD TVs
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white hover:text-yellow-500 transition"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-yellow-600 duration-200">
              Apon Telicom
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
