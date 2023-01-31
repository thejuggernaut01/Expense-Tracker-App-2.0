import React, { useState, useRef } from "react";
import ErrorModal from "../components/UI/ErrorModal";

const AuthContext = React.createContext({
  isEnteredData: [],
  updateEnteredData: () => {},
  editHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const titleRef = useRef();
  const valueRef = useRef();

  const [enteredData, setEnteredData] = useState([]);
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredValue = valueRef.current.value;

    const data = {
      title: enteredTitle,
      value: enteredValue,
      id: Math.random().toString(),
    };

    if (
      enteredTitle.trim().length <= 0 ||
      enteredValue.trim().length <= 0 ||
      enteredValue.trim() < 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid title and expense.",
      });
    } else {
      setEnteredData((prevData) => {
        return [data, ...prevData];
      });
    }

    titleRef.current.value = "";
    valueRef.current.value = "";
  };

  const editHandler = (id) => {
    enteredData.forEach((data) => {
      if (data.id === id) {
        titleRef.current.value = data.title;
        valueRef.current.value = data.value;
      } else {
        return;
      }
    });
    setEnteredData(enteredData.filter((object) => object.id !== id));
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isEnteredData: enteredData,
        enteredTitle: titleRef,
        enteredValue: valueRef,
        updateEnteredData: setEnteredData,
        editHandler: editHandler,

        submitHandler: submitHandler,
      }}
    >
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
