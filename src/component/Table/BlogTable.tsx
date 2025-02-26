"use client";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { IoCreateSharp } from "react-icons/io5";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import UpdateBlog from "../Model/UpdateBlog";

const BlogTable = ({ blog }: { blog: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteBlog] = useDeleteBlogMutation();

  const HandleToDelete = async (e: FieldValues) => {
    try {
      const blogId = e?.userId as string;
      const res = await deleteBlog(blogId).unwrap();
      if (res?.success) {
        toast.success(`${e?.title} blog deleted successfully`);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(
        `${err?.data?.message ? err?.data?.message : "something went wrong"}`
      );
    }
  };
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3 text-sm uppercase">
        <Image
          height={100}
          width={100}
          priority
          src={blog?.image}
          alt={blog?.title}
          className="h-12 w-12 object-cover rounded-full border-2 border-blue-400"
        />
      </td>
      <td className="p-3 text-sm uppercase">{blog?.title}</td>
      <td className="p-3 text-sm uppercase">{blog?.category}</td>
      <td className="p-3 text-sm uppercase">{blog?.status}</td>

      <td className=" ">
        <RiDeleteBin6Line
          onClick={() => HandleToDelete(blog)}
          className=" w-full  text-black hover:text-red-300 duration-200"
          size={25}
        />
      </td>
      <td className=" ">
        <RiDeleteBin6Line
          onClick={() => HandleToDelete(blog)}
          className=" w-full text-black hover:text-red-300 duration-200"
          size={25}
        />
      </td>
      <td className=" ">
        <UpdateBlog
          blogs={blog}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <IoCreateSharp
          onClick={() => setIsOpen(true)}
          className=" w-full text-black hover:text-blue-400 duration-200"
          size={25}
        />
      </td>
      <td className=" ">
        <MdOutlineArrowCircleRight
          className=" w-full text-black hover:text-blue-400 duration-200"
          size={25}
        />
      </td>
    </tr>
  );
};

export default BlogTable;
