"use client";
import Loading from "@/app/loading";
import AddBlogModal from "@/component/Model/AddBlogModal";
import AddProductModel from "@/component/Model/AddProductModel";
import BlogTable from "@/component/Table/BlogTable";
import NotFound from "@/component/ui/NotFound/NotFound";
import { useFetchBlogsQuery } from "@/redux/api/blogApi";
import { TProduct } from "@/types/global";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useFetchBlogsQuery(undefined);
  console.log(data);
  const blog = data?.data?.result;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-[100vw] space-y-5">
      <div className="w-full md:max-w-screen-lg border flex justify-between items-center ">
        <p className="text-xl font-bold">Blogs</p>

        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full font-semibold shadow-sm transition-all duration-300 hover:bg-indigo-700"
        >
          Add Blog
        </button>
      </div>

      <AddBlogModal setIsOpen={setIsOpen} isOpen={isOpen} />
      {blog?.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b">
              <tr className="text-left">
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Status</th>
                <th className="p-3">Soft Delete</th>
                <th className="p-3">Delete</th>
                <th className="p-3">Update</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {blog?.map((blog: TProduct) => (
                <BlogTable key={blog._id} blog={blog} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NotFound link="/dashboard/admin/products" />
      )}
    </div>
  );
};

export default page;
