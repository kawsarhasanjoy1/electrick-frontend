"use client";
import { USER_ROLE } from "@/constance/global";
import SidebarItem from "@/utils/SidebarItem";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const item = SidebarItem(USER_ROLE.superAdmin);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <div
        className="relative bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-10 text-white md:hidden"
        onClick={() => setIsToggle(!isToggle)}
      >
        <button
          onClick={() => setIsToggle(true)}
          className="md:hidden fixed top-2 left-2 z-10"
        >
          {!isToggle && <FaBars />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`h-screen w-64 fixed left-0 top-0 bg-gray-50 text-gray-800 border-r transform ${
          isToggle ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button for Mobile */}
          <div
            onClick={() => setIsToggle(false)}
            className="md:hidden absolute right-2 top-2 cursor-pointer"
          >
            <HiX size={28} />
          </div>

          {/* Sidebar Header */}
          <div className="flex items-center justify-center h-14 border-b">
            <div>Admin Dashboard</div>
          </div>

          {/* Scrollable Sidebar Content */}
          <div className="flex-grow overflow-y-auto">
            <ul className="flex flex-col py-4 space-y-1">
              {item?.map((Item, index) => (
                <li key={index}>
                  <Link
                    href={`dashboard/${Item?.path}`}
                    className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <div className="inline-flex justify-center items-center ml-4">
                      <Item.icon />
                    </div>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {Item?.title}
                    </span>
                  </Link>
                </li>
              ))}

              {/* Divider */}
              <li className="px-5">
                <div className="flex items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Settings
                  </div>
                </div>
              </li>

              {/* Profile */}
              <li>
                <a
                  href="#"
                  className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CgProfile />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </a>
              </li>

              {/* Settings */}
              <li>
                <a
                  href="#"
                  className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CiSettings />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </a>
              </li>

              {/* Logout */}
              <li>
                <a
                  href="#"
                  className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <IoLogOutOutline />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
