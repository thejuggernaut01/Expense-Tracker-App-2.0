import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/auth-context";

const ExpensesList = (props) => {
  const ctx = useContext(AuthContext);

  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  const editIcon = <FontAwesomeIcon icon={faEdit} />;

  const deleteHandler = (id) => {
    ctx.updateEnteredData(
      ctx.isEnteredData.filter((object) => object.id !== id)
    );
  };

  return (
    <React.Fragment>
      <section className="md:mt-10 ml-5 lg:ml-20 xl:ml-38">
        <div className="flex">
          <h4 className="font-bold md:text-xl mr-20 whitespace-nowrap">
            Expense Title
          </h4>
          <h4 className="font-bold md:text-xl whitespace-nowrap">
            Expense Value
          </h4>
        </div>
        {ctx.isEnteredData.map((data) => (
          <div data-id={data.id} key={data.id} className="flex">
            <p className="font-semibold md:text-lg mr-44 md:mr-44">
              {data.title}
            </p>
            <p className="font-semibold md:text-lg mr-32 md:mr-44 lg:mr-32 ">
              {data.value}
            </p>

            <div className="flex justify-between ">
              <p
                onClick={() => ctx.editHandler(data.id)}
                id="edit"
                className="pr-3 cursor-pointer edit"
                data-id={data.id}
              >
                {editIcon}
              </p>
              <p
                onClick={() => deleteHandler(data.id)}
                className="cursor-pointer"
              >
                {trashIcon}
              </p>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default ExpensesList;
