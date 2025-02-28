"use client";
import Loading from "@/app/loading";
import AddProductModel from "@/component/Model/AddProductModel";
import ProductTable from "@/component/Table/ProductTable";
import NotFound from "@/component/ui/NotFound/NotFound";
import Pagination from "@/component/ui/QueryBuilders/Pagination";
import Searching from "@/component/ui/QueryBuilders/Searching";
import Sorting from "@/component/ui/QueryBuilders/Shorting";
import { sortProducts } from "@/constance/global";
import { useFetchProductsQuery } from "@/redux/api/productApi";
import { TProduct } from "@/types/global";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filters: Record<string, any> = {};
  console.log(filters);
  const router = useRouter();
  const searchParams = useSearchParams();
  searchParams?.forEach((value, key) => {
    filters[key] = value;
  });
  const limit = 5;
  const currentPage = Number(searchParams.get("page") || 1);
  const { data, isLoading, isError } = useFetchProductsQuery({...filters, limit});
  const totalProducts = data?.data?.meta?.total;
  const totalPages = Math.ceil(totalProducts / limit);
  const product = data?.data?.result;
  const updateParams = (key: string, value: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-[100vw] space-y-5 mt-6">
      <div className="w-full md:max-w-screen-lg  flex justify-between items-center ">
        <p className="text-xl font-bold">Products</p>

        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full font-semibold shadow-sm transition-all duration-300 hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      <AddProductModel setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="flex justify-between items-center mb-4 md:max-w-screen-lg">
        <Searching
          onSearch={(value: any) => updateParams("searchTerm", value)}
        />
        <Sorting
          sort={sortProducts}
          onSort={(value) => updateParams("sort", value)}
        />
      </div>
      {product?.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b">
              <tr className="text-left">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Model</th>
                <th className="p-3">Quality</th>
                <th className="p-3">Price</th>
                <th className="p-3">Discount</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Sold</th>
                <th className="p-3">Status</th>
                <th className="p-3">Soft Delete</th>
                <th className="p-3">Delete</th>
                <th className="p-3">Update</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((product: TProduct) => (
                <ProductTable key={product._id} product={product} />
              ))}
            </tbody>
          </table>
          <div className=" md:max-w-screen-lg">
            <Pagination
              currentPage={currentPage}
              onPageChange={(page) => updateParams("page", page.toString())}
              totalPages={totalPages}
            />
          </div>
        </div>
      ) : (
        <NotFound link="/dashboard/admin/products" />
      )}
    </div>
  );
};

export default Page;
