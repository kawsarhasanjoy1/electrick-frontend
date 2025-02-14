import {
  FaTree,
  FaWater,
  FaBuilding,
  FaTools,
  FaMobile,
  FaTruck,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className=" text-2xl uppercase ">Why chose us ?</h1>
        <p className=" ">
          We offer high-quality LCD screens with fast, reliable service and
          expert support
        </p>
      </div>
      <div className="h-full  w-full 0 pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          {/* LCD Screen Replacement */}
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/40">
              <FaMobile className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-darken text-black mb-3 text-xl font-medium lg:px-14">
              LCD SCREEN REPLACEMENT
            </h1>
            <p className="px-4 text-gray-500">
              আমরা সব ধরনের স্মার্টফোনের LCD স্ক্রিন রিপ্লেসমেন্ট করে থাকি।
              আমাদের পণ্য 100% অরিজিনাল এবং ওয়ারেন্টিসহ পাওয়া যায়।
            </p>
          </div>

          {/* LCD Repair & Maintenance */}
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/40">
              <FaTools className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-darken text-black mb-3 text-xl font-medium lg:px-14">
              LCD REPAIR & MAINTENANCE
            </h1>
            <p className="px-4 text-gray-500">
              আপনার ফোনের LCD স্ক্রিনের সমস্যা? আমাদের এক্সপার্ট টেকনিশিয়ানরা
              দ্রুত এবং নির্ভরযোগ্য সার্ভিস প্রদান করেন।
            </p>
          </div>

          {/* Fast Delivery Service */}
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/40">
              <FaTruck className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-darken text-black mb-3 text-xl font-medium lg:px-14">
              FAST DELIVERY SERVICE
            </h1>
            <p className="px-4 text-gray-500">
              বাংলাদেশের যেকোনো স্থানে দ্রুত এবং নিরাপদ ডেলিভারি সার্ভিস। অর্ডার
              করুন এবং নির্ধারিত সময়ে পণ্য গ্রহণ করুন!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
