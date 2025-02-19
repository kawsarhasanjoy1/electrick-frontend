import { USER_ROLE } from "@/constance/global";
import React from "react";
import { FaMicroblog, FaUsers } from "react-icons/fa";
import {
  MdOutlineAddShoppingCart,
  MdOutlineDashboard,
  MdOutlinePayment,
} from "react-icons/md";

const SidebarItem = (role: any) => {
  const itemMenu: any[] = [];
  switch (role) {
    case USER_ROLE.superAdmin:
      itemMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Products",
          path: `/${role}/products`,
          icon: MdOutlineAddShoppingCart,
        },
        {
          title: "Users",
          path: `/${role}/users`,
          icon: FaUsers,
        },
        {
          title: "Blogs",
          path: `/${role}/blogs`,
          icon: FaMicroblog,
        },
        {
          title: "Payment history",
          path: `/${role}/payment-history`,
          icon: MdOutlinePayment,
        }
      );
      break;
    case USER_ROLE.admin:
      itemMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Products",
          path: `/${role}/products`,
          icon: MdOutlineAddShoppingCart,
        },
        {
          title: "Users",
          path: `/${role}/users`,
          icon: FaUsers,
        },
        {
          title: "Blogs",
          path: `/${role}/blogs`,
          icon: FaMicroblog,
        },
        {
          title: "Payment history",
          path: `/${role}/payment-history`,
          icon: MdOutlinePayment,
        }
      );
      break;
    case USER_ROLE.user:
      itemMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: MdOutlineDashboard,
        },
        {
          title: "Order",
          path: `/${role}/orders`,
          icon: MdOutlineAddShoppingCart,
        },
        {
          title: "Reviews",
          path: `/${role}/reviews`,
          icon: MdOutlineAddShoppingCart,
        },

        {
          title: "Payment history",
          path: `/${role}/payment-history`,
          icon: MdOutlinePayment,
        }
      );
      break;
  }
  return [...itemMenu];
};

export default SidebarItem;
