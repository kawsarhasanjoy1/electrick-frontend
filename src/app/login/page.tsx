"use client";
import EFrom from "@/form/EFrom";
import EInput from "@/form/EInput";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { loginUser } from "@/redux/fetures/authSlice";
import { decodeToken } from "@/utils/decodToke";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
const image =
  "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/logo.svg";
const page = () => {
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();
  const HandleLogin = async (e: FieldValues) => {
    try {
      const res = await login(e).unwrap();
      console.log(res);
      const token = res?.data?.accessToken;
      if (token) {
        const user = decodeToken(token);
        dispatch(loginUser({ user, token }));
        toast.success(res?.message);
        window.location.href = "/";
      }
    } catch (err: any) {
      console.log(err?.data?.message);
      toast.error(
        err?.data?.message ? err?.data?.message : "Something went wrong"
      );
    }
  };
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
                <Image src={image} width={150} height={150} alt="" />
              </div>
            </div>

            {/* Form */}
            <EFrom
              defaultValues={{
                email: "kawsar@gmail.com",
                password: "kawsar12",
              }}
              onSubmit={HandleLogin}
            >
              <div className="mt-8 space-y-6">
                <EInput
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  type="email"
                  edit=" text-gray-500 font-bold"
                  required={true}
                />
                <EInput
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  edit=" text-gray-500 font-bold"
                  required={true}
                />

                <div className="relative">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 text-white py-2 px-4 rounded-md hover:from-cyan-600 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </EFrom>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Don't have an account yet! ?
                  </span>
                </div>
              </div>
            </div>

            {/* Google Sign-In Button */}
            <div className="mt-6 text-blue-600">
              <Link href={"/register"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
