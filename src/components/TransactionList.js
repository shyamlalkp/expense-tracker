import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { transaction } from "./transaction";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <transaction key={transaction.id} transaction={transaction} />
        ))}
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
