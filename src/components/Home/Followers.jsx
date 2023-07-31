import React, { useState, useEffect } from "react";
import classes from "./Followers.module.css";
import axios from "axios";
import Follower from "./Follower";

const Followers = (props) => {
  const followersUrl = props.followers_url;
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get(followersUrl)
      .then((response) => {
        setFollowers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching followers:", error);
      });
  }, [followersUrl]);

  return (
    <div className={classes.card}>
      <p className={classes.title}>Followers</p>
      {followers.map((follower) => (
        <Follower
          key={follower.id}
          follower={follower}
          onClick={props.onFollowerSelection}
        />
      ))}
    </div>
  );
};

export default Followers;
