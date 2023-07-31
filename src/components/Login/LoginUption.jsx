import React from "react";
import classes from "./LoginUption.module.css";
const LoginUptions = (props) => {
  return (
    <div className={classes.buttonBox}>
      <div className={classes.logo}>{props.logo}</div>
      <p className={classes.label}>{props.children}</p>
    </div>
  );
};

export default LoginUptions;
