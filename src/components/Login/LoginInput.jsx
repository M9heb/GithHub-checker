import React from "react";
import classes from "./LoginInput.module.css";
const LoginInput = (props) => {
  return (
    <div className={classes.inputBox}>
      <div className={classes.logo}>{props.logo}</div>
      <input
        itemType={props.itemType}
        className={classes.input}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >
        {props.children}
      </input>
    </div>
  );
};
export default LoginInput;
