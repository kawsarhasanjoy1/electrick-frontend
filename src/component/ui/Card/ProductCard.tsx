import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "@smastrom/react-rating/style.css"
const ProductCard = ({ product }: any) => {
  let discountParsent;
  const price = product?.price;
  const discountPrice = product?.discountPrice;
  if (price && discountPrice) {
    discountParsent = ((price - discountPrice) / price) * 100;
  }

  return (
    <div
      key={product?._id}
      className="bg-white rounded-sm shadow-xl overflow-hidden transform transition-all h-full flex flex-col relative"
    >
      <div>
        {discountParsent ? (
          <p className=" absolute bg-green-500 px-2 text-white rounded-full left-4 top-4">{`${discountParsent?.toFixed(
            0
          )}%`}</p>
        ) : (
          ""
        )}
      </div>
      <Image
        width={300}
        height={300}
        src={product?.image}
        alt={product?.name}
        className="w-full h-48 object-cover "
        quality={100}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-[14px] font-semibold text-gray-800 h-12">
          {product?.name}
        </h2>
        <p className="text-gray-600 text-[12px] mt-2">
          {product?.description?.slice(0, 36)}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {product?.discountPrice === 0 ? (
            <span className="text-md font-bold text-orange-500">
              ${parseInt(product?.price)}
            </span>
          ) : (
            <div className=" w-32  flex gap-1">
              <span className="text-md font-bold text-orange-500">
                ${parseInt(product?.discountPrice)}
              </span>
              <div className=" relative flex flex-col">
                <span className=" text-gray-800">
                  ${Math.floor(product?.price)}
                </span>
                <span className=" border w-full border-red-400 absolute top-[45%]"></span>
              </div>
            </div>
          )}
          <span
            className={`text-sm font-medium ${
              product?.quantity === 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {product?.quantity === 0 ? "out of stock" : "sale"}
          </span>
        </div>
        <div>
          <Rating
            style={{ width: 80 }}
            value={product?.ratingAverage}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 mb-3 mt-2">
            Model: {product?.modelNumber}
          </span>
        </div>
        <div className="mt-auto ">
          <button className="bg-blue-500 text-[10px] uppercase text-white py-2 px-4 w-full font-bold flex gap-2 justify-center items-center">
            View Details <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
