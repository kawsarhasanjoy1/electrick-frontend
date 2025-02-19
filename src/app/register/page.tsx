import Image from "next/image";
import Link from "next/link";
import React from "react";
const image =
  "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/logo.svg";
const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* Background Gradient Shape */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        {/* Login Card */}
        <div className="relative px-6 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-12">
          <div className="max-w-md mx-auto">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
              <div className="mt-2 text-sm text-gray-600 flex justify-center">
                <Image priority src={image} width={150} height={150} alt="" />
              </div>
            </div>

            {/* Form */}
            <div className="mt-8 space-y-6">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
                  placeholder="Password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              {/* Submit Button */}
              <div className="relative">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 text-white py-2 px-4 rounded-md hover:from-cyan-600 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all">
                  Register
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    do your have an account ?
                  </span>
                </div>
              </div>
            </div>

            {/* Google Sign-In Button */}
            <div className="mt-6 text-blue-600">
              <Link href={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
