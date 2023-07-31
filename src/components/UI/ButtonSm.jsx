import React from "react";
import classes from "./ButtonSm.module.css";
const ButtonSm = (props) => {
  return (
    <button
      itemType={props.itemType}
      className={classes.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ButtonSm;
