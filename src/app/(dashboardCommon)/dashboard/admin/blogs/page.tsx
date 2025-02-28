"use client";
import Loading from "@/app/loading";
import AddBlogModal from "@/component/Model/AddBlogModal";
import BlogTable from "@/component/Table/BlogTable";
import NotFound from "@/component/ui/NotFound/NotFound";
import Pagination from "@/component/ui/QueryBuilders/Pagination";
import Searching from "@/component/ui/QueryBuilders/Searching";
import Sorting from "@/component/ui/QueryBuilders/Shorting";
import { sortBlogs } from "@/constance/global";
import { useFetchBlogsQuery } from "@/redux/api/blogApi";
import { TProduct } from "@/types/global";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const filters: Record<string, any> = {};
  searchParams.forEach((value, key) => {
    filters[key] = value;
  });
  const router = useRouter();
  const currentPage = Number(searchParams.get("page") || 1);
  const limit = 5;
  const { data, isLoading, isError } = useFetchBlogsQuery({
    ...filters,
    limit,
  });
  const updateParams = (key: string, value: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
  const blog = data?.data?.result;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-[100vw] space-y-5 mt-6">
      <div className="w-full  flex justify-between items-center ">
        <p className="text-xl font-bold">Blogs</p>

        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full font-semibold shadow-sm transition-all duration-300 hover:bg-indigo-700"
        >
          Add Blog
        </button>
      </div>

      <div className=" flex justify-between ">
        <Searching onSearch={(value) => updateParams("searchTerm", value)} />
        <Sorting
          onSort={(value) => updateParams("sort", value)}
          sort={sortBlogs}
        />
      </div>
      <AddBlogModal setIsOpen={setIsOpen} isOpen={isOpen} />
      {blog?.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b">
              <tr className="text-left uppercase text-sm">
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
          <div>
            <Pagination
              currentPage={currentPage}
              onPageChange={(page) => updateParams("page", page.toString())}
              totalPages={data?.data?.meta?.totalPage}
            />
          </div>
        </div>
      ) : (
        <NotFound link="/dashboard/admin/products" />
      )}
    </div>
  );
};

export default page;
