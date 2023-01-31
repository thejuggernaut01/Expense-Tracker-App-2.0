import React, { useState } from "react";
import AccountDetails from "./AccountDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faCreditCard,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import ErrorModal from "../components/UI/ErrorModal";

const BudgetInput = (props) => {
  // Font Awesome
  const dollarIcon = <FontAwesomeIcon icon={faDollar} />;
  const creditCardIcon = <FontAwesomeIcon icon={faCreditCard} />;
  const moneyBillIcon = <FontAwesomeIcon icon={faMoneyBill1} />;
  // states
  const [enteredBudget, setEnteredBudget] = useState("");
  const [passBudget, setPassBudget] = useState(0);
  const [error, setError] = useState("");

  const budgetHandler = (event) => {
    setEnteredBudget(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredBudget.trim().length <= 0 || enteredBudget <= 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter your budget (non-empty values, and greater than 0).",
      });
    } else {
      setPassBudget(enteredBudget);
    }

    // clear values
    setEnteredBudget("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <div className="lg:flex ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col border-2 border-green-500 p-7 rounded"
        >
          <label htmlFor="budget" className="pb-4 font-bold text-lg opacity-75">
            Please Enter Your Budget
          </label>
          <input
            id="budget"
            type="number"
            value={enteredBudget}
            onChange={budgetHandler}
            className="pl-3 border border-green-400 sm:w-11/12 md:w-11/12 lg:w-96 h-10 rounded-md outline-green-400"
          />
          <button
            type="submit"
            className="border border-green-500 mt-8 text-center w-28 p-2 rounded-md text-green-500 hover:bg-green-700 hover:text-white hover:shadow-xl"
          >
            Calculate
          </button>
        </form>

        <AccountDetails
          dollar={dollarIcon}
          card={creditCardIcon}
          bill={moneyBillIcon}
          budget={passBudget}
        />
      </div>
    </React.Fragment>
  );
};

export default BudgetInput;
