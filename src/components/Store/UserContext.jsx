import React, { useState } from "react";
import axios from "axios";
const FetchedUser = React.createContext({
  user: null,
  username: "",
  onSearch: (e) => {},
  setUsername: (username) => {},
});

export const FetchedUserProvider = (props) => {
  const [state, setState] = useState({ user: null, username: "" });
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${state.username}`
      );
      setState((prev) => ({ ...prev, user: response.data }));
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };
  const setUsername = (username) => {
    setState((prev) => ({ ...prev, username: username }));
  };
  return (
    <FetchedUser.Provider
      value={{
        username: state.username,
        user: state.user,
        onSearch: handleSearch,
        setUsername: setUsername,
      }}
    >
      {props.children}
    </FetchedUser.Provider>
  );
};

export default FetchedUser;
