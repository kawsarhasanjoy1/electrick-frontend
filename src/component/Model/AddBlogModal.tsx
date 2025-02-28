"use client";
import { lcdCategories, statuses } from "@/constance/global";
import EFrom from "@/form/EFrom";
import EImage from "@/form/EImage";
import EInput from "@/form/EInput";
import ESelect from "@/form/ESelect";
import useUploadImage from "@/Hooks/useUploadImage";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { HiX } from "react-icons/hi";
import { toast } from "sonner";

const AddBlogModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const { userId } = useAppSelector((store) => store?.auth?.user);
  const [createBlog] = useCreateBlogMutation();

  const HandleToSubmit = async (e: FieldValues) => {
    console.log(e)
    const res = await useUploadImage(e?.image);
    if (res?.id) {
      const image = res?.display_url;
      try {
        const blogData = { ...e, userId, image };
        const res = await createBlog(blogData).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        } else {
          toast.error("Something went wrong");
        }
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong"
        );
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh] transition-transform duration-500 transform">
          <div className="flex justify-between items-center border-b pb-4">
            <h4 className="text-lg font-medium text-gray-900">Add Blog</h4>
            <button onClick={() => setIsOpen(false)}>
              <HiX size={20} />
            </button>
          </div>

          <EFrom onSubmit={HandleToSubmit}>
            <div className="overflow-y-auto max-h-[60vh] grid md:grid-cols-2 gap-4">
              <EInput
                name="title"
                label="Title"
                placeholder="Blog title"
                type="text"
                required
              />

              <ESelect
                name="category"
                label="Category"
                options={lcdCategories?.map((item) => item?.name)}
                required
              />
              <ESelect
                name="status"
                label="Status"
                options={["published", "unpublished"]}
                required
              />
              <EInput
                name="description"
                label="Description"
                placeholder="Blog description"
                type="textarea"
                required
              />
            </div>
            <EImage edit="" label="Image" name="image" required={true} />
            <div className="flex justify-end border-t pt-4 space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 text-xs bg-gray-200 text-gray-700 rounded-full font-semibold shadow-xs transition-all duration-500 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full font-semibold shadow-xs transition-all duration-500 hover:bg-indigo-700"
              >
                Publish Blog
              </button>
            </div>
          </EFrom>
        </div>
      </div>
    </div>
  );
};

export default AddBlogModal;
