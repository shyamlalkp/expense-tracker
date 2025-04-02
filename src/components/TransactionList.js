import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionComponent } from "./TransactionComponent";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((data) => (
          <TransactionComponent key={data.id} data={data} />
        ))}
      </ul>
    </>
  );
};
