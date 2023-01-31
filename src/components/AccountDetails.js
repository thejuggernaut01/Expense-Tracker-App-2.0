import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

const AccountDetails = (props) => {
  const ctx = useContext(AuthContext);
  let totalExpenses = 0;
  let totalBalance = 0;

  if (ctx.isEnteredData.length > 0) {
    totalExpenses = ctx.isEnteredData.reduce((acc, cur) => {
      acc += Number(cur.value);
      return acc;
    }, 0);
  }

  totalBalance = props.budget - totalExpenses;

  return (
    <section className="flex justify-between ml-7 mr-7 mt-4 mb-4 lg:ml-20 xl:ml-38">
      <div className="text-center lg:mr-5">
        <h2 className="font-bold opacity-75 md:text-2xl lg:text-2xl ">
          BUDGET
        </h2>
        <p className="text-4xl sm:text-5xl text-blue-800 ">{props.bill}</p>
        <p className="font-bold text-green-400 text-xl lg:text-2xl whitespace-nowrap">
          {"$ " + props.budget}
        </p>
      </div>
      <div className="text-center lg:mr-5">
        <h2 className="font-bold opacity-75 md:text-2xl lg:text-2xl ml-10">
          EXPENSES
        </h2>
        <p className="text-4xl sm:text-5xl text-blue-800 pl-10">{props.card}</p>
        <p className="font-bold text-red-400 text-xl lg:text-2xl pl-7 whitespace-nowrap">
          {"$ " + totalExpenses}
        </p>
      </div>
      <div className="text-center lg:mr-5">
        <h2 className="font-bold opacity-75 md:text-2xl lg:text-2xl ml-2">
          BALANCE
        </h2>
        <p className="text-4xl sm:text-5xl text-blue-800 pl-4">
          {props.dollar}
        </p>
        <p
          className={`text-center font-bold ${
            totalBalance === 0 || totalBalance > 0
              ? "text-green-400"
              : "text-red-400"
          } text-xl lg:text-2xl pl-4 whitespace-nowrap`}
        >
          {"$ " + totalBalance}
        </p>
      </div>
    </section>
  );
};

export default AccountDetails;
