"use client";
import Loading from "@/app/loading";
import UserTable from "@/component/Table/UserTable";
import NotFound from "@/component/ui/NotFound/NotFound";
import {
  useBlockUserMutation,
  useFetchAllUserQuery,
  useSoftDeleteUserMutation,
  useUpUserRoleMutation,
} from "@/redux/api/authApi";
import React from "react";
import { toast } from "sonner";

const page = () => {
  const { data } = useFetchAllUserQuery(undefined);
  const [softDeleteUser] = useSoftDeleteUserMutation();
  const [upRole] = useUpUserRoleMutation();
  const [blockUser, { isLoading }] = useBlockUserMutation();

  const HandleToUser = async (userPayload: any, type: string) => {
    try {
      if (type === "soft") {
        const soft = userPayload?.isDeleted == false ? true : false;
        const res = await softDeleteUser({
          data: { isDeleted: soft },
          userId: userPayload?._id,
        }).unwrap();
        if (res?.success) {
          toast.success(
            userPayload?.isDeleted == true
              ? "user restored successful"
              : "user soft deleted successful"
          );
        }
      }
      if (type === "block") {
        const soft = userPayload?.isBlocked == false ? true : false;
        const res = await blockUser({
          data: { isBlocked: soft },
          userId: userPayload?._id,
        }).unwrap();
        if (res?.success) {
          toast.success(
            userPayload?.isBlocked == true
              ? "user unblocked successful"
              : "user blocked successful"
          );
        }
      }
      if (type === "role") {
        const role = userPayload?.role == "admin" ? "user" : "admin";
        const res = await upRole({
          data: { role: role },
          userId: userPayload?._id,
        }).unwrap();
        if (res?.success) {
          toast.success(
            userPayload?.role == "user" ? "admin successful" : "user successful"
          );
        }
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full overflow-x-auto border">
      {data?.data?.length > 0 ? (
        <table className="w-full min-w-[900px] bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left uppercase text-sm font-bold">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Block</th>
              <th className="p-3">Soft Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user: any) => (
              <UserTable
                HandleToUser={HandleToUser}
                key={user?._id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound link="/dashboard/admin" />
      )}
    </div>
  );
};

export default page;
