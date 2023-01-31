import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`bg-red-800 ${classes.button}`}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
