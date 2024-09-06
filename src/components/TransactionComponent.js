import React from "react";

export const TransactionComponent = (data) => {
  // console.log("martin", data.data);
  return (
    <li className="minus">
      <p>{data.data.text}</p>
      <span>400{/* {sign}${transaction.amount} */}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
