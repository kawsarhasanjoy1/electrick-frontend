"use client";
import Loading from "@/app/loading";
import ReviewTable from "@/component/Table/ReviewTable";
import NotFound from "@/component/ui/NotFound/NotFound";
import Pagination from "@/component/ui/QueryBuilders/Pagination";
import Searching from "@/component/ui/QueryBuilders/Searching";
import Sorting from "@/component/ui/QueryBuilders/Shorting";
import { sortReview } from "@/constance/global";
import {
  useFetchReviewsQuery,
  useSoftDeleteReviewsMutation,
} from "@/redux/api/reviewApi";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filters = useMemo(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  // Pagination Settings
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 5;
  const skip = (currentPage - 1) * limit;

  // Fetching Reviews
  const { data, isLoading } = useFetchReviewsQuery({ ...filters, limit, skip });
  const [softDeleteReview] = useSoftDeleteReviewsMutation();

  if (isLoading) return <Loading />;

  // Update URL Params
  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set(key, value) : params.delete(key);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Pagination Logic
  const totalReviews = data?.data?.meta?.total || 0;
  const totalPages = Math.ceil(totalReviews / limit);

  return (
    <div className="w-full overflow-x-auto border">
      <div className="flex justify-between items-center mb-4">
        <Searching
          onSearch={(value: any) => updateParams("searchTerm", value)}
        />
        <Sorting
          sort={sortReview}
          onSort={(value) => updateParams("sort", value)}
        />
      </div>

      {data?.data?.result?.length > 0 ? (
        <table className="w-full min-w-[900px] bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left uppercase text-sm font-bold">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Review</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Soft Delete</th>
              <th className="p-3">Product Details</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.result?.map((review: any) => (
              <ReviewTable
                key={review?._id}
                review={review}
                HandleToReview={async () => {
                  try {
                    const isDeleted = Boolean(review?.isDeleted) ? false : true;
                    const res = await softDeleteReview({
                      data: { isDeleted },
                      userId: review?._id,
                    }).unwrap();

                    if (res?.success) {
                      toast.success(
                        isDeleted
                          ? "Review soft deleted successfully"
                          : "Review restored successfully"
                      );
                    }
                  } catch {
                    toast.error("Something went wrong");
                  }
                }}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound link="/dashboard/admin" />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => updateParams("page", page.toString())}
      />
    </div>
  );
};

export default Page;
