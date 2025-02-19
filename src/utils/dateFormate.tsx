import React from "react";

const dateFormate = (createdAt: string) => {
  const dateObj = new Date(createdAt);
  const day = ("0" + dateObj.getUTCDate()).slice(-2);
  const month = ("0" + (dateObj.getUTCMonth() + 1)).slice(-2);
  const year = dateObj.getUTCFullYear().toString().slice(-2);

  return `${day}-${month}-${year}`;
};

export default dateFormate;
