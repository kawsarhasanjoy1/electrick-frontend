import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CommonBanner from "../CommonBanner/CommonBanner";
import { crownLcd } from "@/constance/global";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import AddReview from "../Review/AddReveiw";
import DetailsReview from "../Review/DetailsReview";
import SelectButton from "../Button/SelectButton";
import ReviewCarousel from "../Review/ReviewCarousel";

const ProductDetails = ({ product, refetch }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const handleToQuantity = (e: string) => {
    if (quantity >= 1 && e == "increase") {
      setQuantity(quantity + 1);
      refetch();
    }
    if (quantity >= 1 && e == "disincreased") {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <CommonBanner
          bgImage={product?.image ? product?.image : crownLcd}
          title="Product details page"
        />
      </div>
      <div className=" md:px-10 px-2">
        <section className="relative mt-10">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto ">
              <div className="img">
                <div className="img-box h-full max-lg:mx-auto">
                  <Image
                    priority
                    width={1000}
                    height={700}
                    src={
                      product?.image
                        ? product?.image
                        : "https://pagedone.io/asset/uploads/1700471600.png"
                    }
                    alt="Yellow Tropical Printed Shirt image"
                    className="max-lg:mx-auto lg:ml-auto md:w-[500px] md:h-[550px] object-cover rounded-md border-2"
                  />
                </div>
              </div>
              <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                <div className="data w-full max-w-xl">
                  <div className=" flex items-center gap-2">
                    Brand:{" "}
                    <p className="text-lg font-medium leading-8 text-indigo-600">
                      {product?.brand}
                    </p>
                  </div>
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                    {product?.name}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <p>
                      {product?.discountPrice > 0 ? (
                        <span className=" absolute top-0 md:left-20 bg-blue-500 px-3 py-1 text-white rounded-full">
                          {product?.price}
                          <span className="  border-2 border-b absolute border-gray-200 w-full left-0 top-[15px]"></span>
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                      $
                      {product?.discountPrice > 0
                        ? product?.discountPrice
                        : product?.price}
                    </h6>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Rating
                          value={product?.ratingAverage}
                          readOnly
                          style={{ width: 120 }}
                        />
                        <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                          {product?.ratingQuantity} review
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-base font-normal mb-5">
                    {product?.description.slice(0, 200)}
                  </p>
                  <ul className="grid gap-y-4 mb-8">
                    <p>
                      Quality:{" "}
                      <span className=" uppercase">{product?.quality}</span>
                    </p>
                    {product?.features?.map(
                      (feature: Record<string, any>, index: number) => (
                        <li key={index} className="flex items-center gap-3">
                          <AiOutlineCheckCircle size={26} color="#4F46E5" />
                          <span className="font-normal text-base text-gray-900">
                            {feature?.name}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                    <div className="flex sm:items-center sm:justify-center w-full">
                      <button
                        onClick={() => handleToQuantity("disincreased")}
                        className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                      >
                        <CiSquareMinus size={22} />
                      </button>
                      <p className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50">
                        {quantity}
                      </p>
                      <button
                        onClick={() => handleToQuantity("increase")}
                        className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                      >
                        <CiSquarePlus size={22} />
                      </button>
                    </div>
                    <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-200">
                      <FaCartPlus />
                      Add to cart
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                      <FaRegHeart size={30} />
                    </button>
                    <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className=" md:mt-20 mt-12">
            <div className="flex border-b border-gray-400 justify-center text-black items-center md:gap-3 md:text-sm text-[10px] font-semibold mb-20">
              <SelectButton
                tab="description"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <SelectButton
                tab="review"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
          {activeTab == "description" ? (
            <div className=" md:flex justify-between space-y-7 md:space-y-0 border">
              <div className=" border-r py-6">{product?.description}</div>
              <Image
                priority
                className=" md:w-72 md:h-72 w-full h-full rounded-md "
                src={product?.image ? product?.image : crownLcd}
                width={300}
                height={300}
                alt="Product image"
              />
            </div>
          ) : (
            ""
          )}

          {activeTab === "review" ? (
            <div>
              <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
                Our customer reviews
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-2">
                <div className=" ">
                  <AddReview refetch={refetch} product={product} />
                </div>
                <div>
                  <DetailsReview product={product} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <ReviewCarousel reviews={product?.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
