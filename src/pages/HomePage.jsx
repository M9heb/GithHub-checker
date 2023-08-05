import React, { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import SearchBox from "../components/Home/SearchBox";
import Followers from "../components/Home/Followers";
import UserProfile from "../components/Home/UserProfile";
import axios from "axios";
import ChartContainer from "../components/Chart/ChartContainer";
const HomePage = (props) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("m9heb");

  console.log(user);
  // console.log(user.followers_url);
  const handleUserInfoFetched = (userData) => {
    setUser(userData);
    setUsername(userData.login);
  };
  const handleFollowerSelection = (selected) => {
    console.log(selected);
    setUsername(selected);
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching followers:", error);
      });
  }, [username]);

  return (
    <div className="container--home">
      {<Navbar onLogout={props.logout} />}
      <SearchBox uname={username} onUserInfoFetched={handleUserInfoFetched} />
      {user && <UserProfile user={user} />}
      {user && (
        <Followers
          onFollowerSelection={handleFollowerSelection}
          followers_url={user.followers_url}
        />
      )}
      <ChartContainer username={username} />
    </div>
  );
};
export default HomePage;
