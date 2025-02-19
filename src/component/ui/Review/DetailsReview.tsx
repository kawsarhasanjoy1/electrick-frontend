import dateFormate from "@/utils/dateFormate";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const DetailsReview = ({ product }: { product: any }) => {
  return (
    <section className=" py-10 md:py-0 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <div className=" gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="p-10 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                {}
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={product?.ratingAverage}
                  readOnly
                />
              </div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                {product?.ratingQuantity} Ratings
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-gray-700 mb-3 uppercase mt-4">
              Customer Reviews
            </h3>
            <div className="space-y-4">
              {/* Example of displaying submitted reviews */}
              <div className=" border-b border-t py-3">
                {product?.reviews?.map((review: any) => (
                  <div
                    key={review?.userId}
                    className=" flex justify-center items-center gap-4"
                  >
                    <Image
                      priority
                      height={100}
                      width={100}
                      className="border h-20 w-20 rounded-full"
                      alt={"user image"}
                      src={review?.userId?.image}
                    />
                    <div className=" space-y-1">
                      <div className=" flex items-center gap-3">
                        <p className=" text-xl">{review?.userId?.name}</p>
                        <p className=" text-xl">
                          {dateFormate(review?.createdAt)}
                        </p>
                      </div>
                      <Rating
                        readOnly
                        value={review?.rating}
                        style={{ width: 120 }}
                      />
                      <p className=" text-gray-600 text-sm">{review?.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsReview;
