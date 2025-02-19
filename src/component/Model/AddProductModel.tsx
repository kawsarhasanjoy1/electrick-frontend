"use client";
import {
  brands,
  lcdCategories,
  lcdTypes,
  qualities,
  refreshRate,
  resolutions,
  statuses,
} from "@/constance/global";
import EFrom from "@/form/EFrom";
import EInput from "@/form/EInput";
import ESelect from "@/form/ESelect";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { HiX } from "react-icons/hi";

const AddProductModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const [selectCategory, setSelectedCategory] = useState("");
  console.log(selectCategory);
  const category = lcdCategories?.map((category) => category?.name);
  const HandleToSubmit = (e: FieldValues) => {
    console.log(e);
  };
  return (
    <div className="w-full relative">
      <div
        className={`fixed inset-0  flex items-center justify-center z-50 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh] transition-transform duration-500 transform">
          <div className="flex justify-between items-center border-b pb-4">
            <h4 className="text-lg font-medium text-gray-900">Modal Title</h4>
            <button onClick={() => setIsOpen(false)}>
              <HiX size={20} />
            </button>
          </div>

          <EFrom onSubmit={HandleToSubmit}>
            <div className=" overflow-y-auto max-h-[60vh] grid md:grid-cols-2 justify-center items-center gap-4">
              <EInput
                name="name"
                label="Name"
                placeholder="Product name"
                type="text"
                required
              />
              <EInput
                name="price"
                label="Price"
                placeholder="Product price"
                type="number"
                required
              />
              <EInput
                name="discountPrice"
                label="Discount Price"
                placeholder="Discounted price"
                type="number"
              />
              <EInput
                name="quantity"
                label="Quantity"
                placeholder="Product quantity"
                type="number"
                required
              />
              <EInput
                name="modelNumber"
                label="Model Number"
                placeholder="Model number"
                type="text"
                required
              />
              <EInput
                name="image"
                label="Image URL"
                placeholder="Image link"
                type="text"
                required
              />
              <EInput
                name="description"
                label="Description"
                placeholder="Short description"
                type="text"
                required
              />

              <ESelect
                type=""
                name="brand"
                label="Brand"
                options={brands}
                required
              />
              <ESelect
                type=""
                name="category"
                label="Category"
                options={category}
                onChange={(selected: any) =>
                  setSelectedCategory(selected)
                }
                required
              />
              <ESelect
                type=""
                name="resolution"
                label="Resolution"
                options={resolutions}
                required
              />
              <ESelect
                type=""
                name="refreshRate"
                label="Refresh Rate"
                options={refreshRate}
                required
              />
              <EInput
                name="screenSize"
                label="Screen Size (inches)"
                placeholder="Size in inches"
                type="number"
                required
              />
              <ESelect
                options={
                  selectCategory === "mobile"
                    ? lcdTypes.mobile
                    : selectCategory === "laptop"
                    ? lcdTypes.led
                    : selectCategory == "tv"
                    ? lcdTypes.tv
                    : selectCategory == "tablet"
                    ? lcdTypes.tablet
                    : selectCategory == "monitor"
                    ? lcdTypes.monitor
                    : selectCategory == "smartwatch"
                    ? lcdTypes.smartwatch
                    : selectCategory == "iphone"
                    ? lcdTypes.iphone
                    : []
                }
                name="displayType"
                label="Display Type"
                placeholder="e.g., IPS, OLED"
                type="text"
                required
              />
              <ESelect
                type=""
                name="quality"
                label="Quality"
                options={qualities}
                required
              />
              <ESelect
                type=""
                name="status"
                label="Status"
                options={statuses}
                required
              />

              <ESelect
                type=""
                name="hdrSupport"
                label="HDR Support"
                options={["true", "false"]}
                required
              />
            </div>

            {/* Modal Footer */}
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
                Okay, got it
              </button>
            </div>
          </EFrom>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
