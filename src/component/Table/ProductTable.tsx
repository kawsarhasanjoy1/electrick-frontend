"use client";
import {
  useDeleteProductMutation,
  useSoftDeleteProductMutation,
} from "@/redux/api/productApi";
import { TProduct } from "@/types/global";
import Image from "next/image";
import React, { useState } from "react";
import { IoCreateSharp } from "react-icons/io5";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import UpProductModal from "../Model/UpProductModal";

const ProductTable = ({ product }: { product: TProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [softDelete] = useSoftDeleteProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const HandleToDelete = async (e: TProduct, type: string) => {
    try {
      const productId = e?._id as string;
      if (type == "soft") {
        const deleted: boolean =
          e?.isDeleted == false ? true : (false as boolean);
        const res = await softDelete({
          data: { isDeleted: deleted },
          productId,
        }).unwrap();
        if (res?.success && deleted == true) {
          toast.success(`${e?.name} product soft deleted successful`);
        } else {
          toast.success(`${e?.name} product restore successful`);
        }
      }
      if (type == "delete") {
        const res = await deleteProduct(productId).unwrap();
        if (res?.success) {
          toast.success(`${e?.name} product permanent deleted successful`);
        }
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
          src={product?.image}
          alt={product?.name}
          className="h-12 w-12 object-cover rounded-full border-2 border-blue-400"
        />
      </td>
      <td className="p-3 text-sm uppercase">{product?.name}</td>
      <td className="p-3 text-sm uppercase">{product?.category}</td>
      <td className="p-3 text-sm uppercase">{product?.brand}</td>
      <td className="p-3 text-sm uppercase">{product?.modelNumber}</td>
      <td className="p-3 text-sm uppercase">{product?.quality}</td>
      <td className="p-3 text-sm uppercase">${product?.price.toFixed(2)}</td>
      <td className="p-3 text-sm uppercase text-red-500">
        ${product?.discountPrice.toFixed(2)}
      </td>
      <td className="p-3 text-sm uppercase">{product?.quantity}</td>
      <td className="p-3 text-sm uppercase">{product?.sold}</td>
      <td
        className={`p-3 text-sm uppercase font-semibold ${
          product?.status === "available" ? "text-green-600" : "text-yellow-500"
        }`}
      >
        {product?.status}
      </td>

      <td className=" t">
        <RiDeleteBin6Line
          onClick={() => HandleToDelete(product, "soft")}
          className=" w-full ext-black hover:text-red-300 duration-200"
          size={25}
        />
      </td>
      <td className=" t">
        <RiDeleteBin6Line
          onClick={() => HandleToDelete(product, "delete")}
          className=" w-full ext-black hover:text-red-300 duration-200"
          size={25}
        />
      </td>
      <td className=" ">
        <UpProductModal
          defaultValue={product}
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

export default ProductTable;
