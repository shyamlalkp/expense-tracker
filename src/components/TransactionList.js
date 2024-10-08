import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionComponent } from "./TransactionComponent";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((data) => (
          <TransactionComponent key={data.id} data={data} />

          // <Transaction transaction={transaction} />
        ))}
        {/* <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li> */}
      </ul>
    </>
  );
};
