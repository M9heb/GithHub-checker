import React from "react";
import classes from "./ButtonLg.module.css";

const ButtonLg = (props) => {
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default ButtonLg;
