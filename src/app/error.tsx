"use client";

import Link from "next/link";

const error = ({ error, reset }: any) => {
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <div>
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">{error?.message}</p>
        <div className=" flex gap-4 justify-center items-center">
          <Link href="/">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Go Back Home
            </button>
          </Link>
          <Link href={"#"} onClick={() => reset()}>
            <button className=" border-2 border-blue-600 bg-blue-600 hover:bg-transparent rounded-md transition-all duration-500 px-6 py-2 mt-6 text-white hover:text-black">
              Reset
            </button>
          </Link>
        </div>
        <div className="mt-8 mx-auto flex justify-center items-center">
          <svg
            className="w-20 h-20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.172 16.172a4 4 0 005.656 0M12 3v1M12 20v1M4.222 5.636l.707.707M18.364 19.778l.707.707M3 12h1M20 12h1M4.222 18.364l.707-.707M18.364 4.222l.707-.707"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default error;
