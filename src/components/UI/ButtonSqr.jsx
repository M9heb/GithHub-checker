import React from "react";
import classes from "./ButtonSqr.module.css";
const ButtonSqr = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={classes.btn}>
      {props.children}
    </button>
  );
};
export default ButtonSqr;
