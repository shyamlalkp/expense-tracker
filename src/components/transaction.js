import React from "react";

export const transaction = ({ transaction } /*or props*/) => {
  return (
    <li className="minus">
      {transaction.text} <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
