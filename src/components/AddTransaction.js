import React, { useState, useReducer, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {                        //prevent default form submission 
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),   //unique id
      text,                                        //transaction description
      amount: +amount,                             //converts string to number
    };
    addTransaction(newTransaction);                // Add transaction to global state
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
