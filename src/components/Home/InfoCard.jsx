import React from "react";
import classes from "./InfoCard.module.css";
const InfoCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>{props.icon}</div>
      <p className={classes.number}>{props.count}</p>
      <p className={classes.label}>{props.title}</p>
    </div>
  );
};
export default InfoCard;
