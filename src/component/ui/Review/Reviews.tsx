"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const reviews = [
  {
    name: "John Doe",
    image:
      "https://i.ibb.co.com/S4HR0gvJ/photo-1633332755192-727a05c4013d-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
    review:
      "The LCD quality is excellent! I had a great experience with this product. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image:
      "https://i.ibb.co.com/S4HR0gvJ/photo-1633332755192-727a05c4013d-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
    review:
      "Fast delivery and the product is exactly as described. Very happy with my purchase!",
    rating: 4,
  },
  {
    name: "Bob Johnson",
    image:
      "https://i.ibb.co.com/S4HR0gvJ/photo-1633332755192-727a05c4013d-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
    review:
      "Good quality LCD. The screen works perfectly, and the color reproduction is top-notch.",
    rating: 5,
  },
  {
    name: "Alice Brown",
    image:
      "https://i.ibb.co.com/S4HR0gvJ/photo-1633332755192-727a05c4013d-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
    review: "Affordable and high quality. Would definitely buy again!",
    rating: 4,
  },
];

const ReviewCarousel = () => {
  return (
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 shadow-lg h-72 relative rounded-xl">
              <div className=" absolute inset-0 bg-gray-700 opacity-10 rounded-xl"></div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  <Image
                    height={50}
                    width={50}
                    alt="review image"
                    src={review?.image}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {review.name}
                  </h4>
                  <div className="flex space-x-1 text-yellow-400">
                    <Rating
                      style={{ width: 150 }}
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
  );
};

export default ReviewCarousel;
