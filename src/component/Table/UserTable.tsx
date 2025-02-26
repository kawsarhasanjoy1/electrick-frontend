"use client";
import Image from "next/image";
import React from "react";

import { TbLockOff, TbLockOpen } from "react-icons/tb";

const UserTable = ({
  user,
  HandleToUser,
}: {
  user: any;
  HandleToUser: any;
}) => {
  return (
    <tr className=" border-b hover:bg-gray-50 text-left">
      <td className=" ">
        <Image
          src={user?.image}
          alt={user?.name}
          width={200}
          height={200}
          className=" w-12 h-12 rounded-full border-2 border-blue-400"
        />
      </td>
      <td className=" uppercase text-sm p-3">{user?.name}</td>
      <td className=" uppercase text-sm p-3">{user?.email}</td>
      <td className={`uppercase text-sm p-3 `}>
        <span
          onClick={() => HandleToUser(user, "role")}
          className={`rounded-full text-white text-sm px-3 py-1 cursor-pointer ${
            user?.role === "user"
              ? "bg-red-300"
              : user?.role === "admin"
              ? "bg-blue-300"
              : "bg-gray-500"
          }`}
        >
          {user?.role}
        </span>
      </td>

      <td className=" uppercase text-sm p-3">
        {
          <button
            onClick={() => HandleToUser(user, "block")}
            className={`flex items-center gap-1 ${
              user?.isBlocked
                ? "bg-blue-400 opacity-50"
                : "bg-red-400 opacity-50"
            } px-3 py-1 rounded-full text-white cursor-pointer hover:opacity-50 duration-200 `}
          >
            {user?.isBlocked ? (
              <span className=" flex items-center gap-1">
                <TbLockOpen />
                unblock
              </span>
            ) : (
              <span className=" flex items-center gap-1">
                <TbLockOff />
                block
              </span>
            )}
          </button>
        }
      </td>
      <td className=" uppercase text-sm p-3">
        <span
          onClick={() => HandleToUser(user, "soft")}
          className={`text-black hover:text-white duration-200 text-left  ${
            user?.isDeleted ? "bg-blue-400 opacity-50" : "bg-red-500 opacity-50"
          } px-3 py-1 rounded-full duration-200`}
        >
          {user?.isDeleted == true ? "Restored" : "Delete"}
        </span>
      </td>
    </tr>
  );
};

export default UserTable;
