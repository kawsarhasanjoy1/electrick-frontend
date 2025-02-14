import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const TrendingProductCard = ({ product, variant }: any) => {
  return (
    <div
      className={`  rounded-lg shadow-lg ${
        variant == "first"
          ? "bg-orange-500 md:flex gap-10 justify-start items-center px-4 text-center md:text-start py-4"
          : variant === "second"
          ? "bg-teal-500 text-center p-2"
          : variant === "third"
          ? " bg-blue-500 p-4 text-center"
          : ""
      }`}
    >
      <Image
        height={400}
        width={400}
        src={product.image}
        alt={product.name}
        className={`  rounded-md 
              ${
                variant === "first"
                  ? " md:h-20 md:w-16 rounded-full mx-auto md:mx-0"
                  : variant === "second"
                  ? "md:h-80 w-full "
                  : variant === "third"
                  ? "md:h-32 object-contain rounded-md  w-full"
                  : ""
              }`}
      />
      <div className={`text-white ${variant === 'second' ? 'pt-4' : ''}`}>
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <div
          className={`${
            variant === "first"
              ? " flex justify-center items-center md:block"
              : variant === "second"
              ? " flex justify-center items-center object-contain"
              : variant === "third"
              ? " flex justify-center items-center"
              : ""
          }`}
        >
          <Rating
            value={product?.ratingAverage}
            style={{ width: 100 }}
            readOnly
          />
        </div>
        <p className="text-gray-200">${product.price}</p>
      </div>
    </div>
  );
};

export default TrendingProductCard;
