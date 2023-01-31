import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import ExpensesList from "./ExpensesList";

const ExpenseInput = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className="lg:flex justify-start">
        <form
          onSubmit={ctx.submitHandler}
          className="flex flex-col border-2 border-red-600 p-7 rounded sm:mt-6"
        >
          <label htmlFor="title" className="pb-4 font-bold text-lg opacity-75">
            Please Enter Expense Title
          </label>
          <input
            id="title"
            ref={ctx.enteredTitle}
            type="text"
            className="pl-3 border border-red-600 sm:w-11/12 md:w-11/12 lg:w-96 h-10 rounded-md outline-red-600"
          />
          <label htmlFor="amount" className="pb-4 font-bold text-lg opacity-75">
            Please Enter Expense Amount
          </label>
          <input
            id="amount"
            type="number"
            ref={ctx.enteredValue}
            className="pl-3 border border-red-600 sm:w-11/12 md:w-11/12 lg:w-96 h-10 rounded-md outline-red-600"
          />
          <button
            type="submit"
            className="border border-red-500 mt-8 text-center w-28 p-2 rounded-md text-red-500 hover:bg-red-700 hover:text-white hover:shadow-xl"
          >
            Calculate
          </button>
        </form>

        <ExpensesList expenseData={ctx.enteredData} />
      </div>
    </React.Fragment>
  );
};

export default ExpenseInput;
