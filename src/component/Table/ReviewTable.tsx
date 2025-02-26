"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ReviewTable = ({
  review,
  HandleToReview,
}: {
  review: any;
  HandleToReview: any;
}) => {
  return (
    <tr className=" border-b hover:bg-gray-50 text-left space-y-4">
      <td className=" ">
        <Image
          src={review?.userId?.image}
          alt={review?.userId?.name}
          width={200}
          height={200}
          className=" w-12 h-12 rounded-full border-2 border-blue-400"
        />
      </td>
      <td className=" uppercase text-sm p-3">{review?.userId?.name}</td>
      <td className=" uppercase text-sm p-3">{review?.userId?.email}</td>
      <td className={`uppercase text-sm p-3 `}>{review?.userId?.role}</td>
      <td className={`uppercase text-sm p-3 `}>
        {review?.review.slice(0, 20)}
      </td>
      <td className={`uppercase text-sm p-3 `}>
        <Rating value={review?.rating} readOnly style={{ width: 100 }} />
      </td>

      <td className=" uppercase text-sm p-3">
        <button
          onClick={() => HandleToReview(review, "soft")}
          className={`text-black hover:text-white duration-200 text-left cursor-pointer  ${
            review?.isDeleted
              ? "bg-blue-400 opacity-50"
              : "bg-red-500 opacity-50"
          } px-3 py-1 rounded-full duration-200`}
        >
          {review?.isDeleted == true ? "Restored" : "Delete"}
        </button>
      </td>
      <td className={`uppercase text-sm p-3 flex justify-center`}>
        {review?.isDeleted === true ? (
          <Link href={`#`}>
            <FaArrowCircleRight size={24} />
          </Link>
        ) : (
          <Link href={`/products/${review?.productId?._id}`}>
            <FaArrowCircleRight size={24} />
          </Link>
        )}
      </td>
    </tr>
  );
};

export default ReviewTable;
