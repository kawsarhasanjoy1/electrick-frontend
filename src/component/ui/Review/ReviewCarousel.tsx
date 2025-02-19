"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import NotFound from "../NotFound/NotFound";

const ReviewCarousel = ({ reviews }: any) => {
  return (
    <div>
      {reviews?.length > 0 ? (
        <div className=" mx-auto py-16">
          <h2 className="text-3xl text-center font-semibold mb-8">
            Customer Reviews & Testimonials
          </h2>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="review-carousel"
          >
            {reviews?.map((review: Record<string, any>, index: any) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 shadow-lg h-72 relative rounded-xl">
                  <div className=" absolute inset-0 bg-gray-700 opacity-10 rounded-xl"></div>
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        priority
                        height={50}
                        width={50}
                        className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
                        alt="review image"
                        src={review?.userId?.image}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">
                        {review.userId?.name}
                      </h4>
                      <div className="flex space-x-1 text-yellow-400">
                        <Rating
                          style={{ width: 120 }}
                          value={review?.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">{review.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <NotFound link="/" />
        </div>
      )}
    </div>
  );
};

export default ReviewCarousel;
