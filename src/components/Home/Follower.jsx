import React from "react";
import classes from "./Followers.module.css";
const Follower = (props) => {
  return (
    <div
      className={classes.follower}
      onClick={() => props.onClick(props.follower.login)}
    >
      <div className={classes.avater}>
        <img src={props.follower.avatar_url} alt="" />
      </div>
      <p className={classes.followername}>{props.follower.login}</p>
      <p className={classes.followertitle}>{props.follower.html_url}</p>
    </div>
  );
};
export default Follower;
