"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const CommonBanner = ({
  title,
  bgImage,
}: {
  title: string;
  bgImage: string;
}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="relative h-[300px] md:h-[450px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-75"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-2 text-gray-300 text-sm md:text-base">
            <li>
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            {pathSegments.map((segment, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                <a
                  href={`/${segment}`}
                  className="hover:text-white capitalize transition duration-300"
                >
                  {segment.replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommonBanner;
