import React, { useState } from "react";
import ButtonSqr from "../UI/ButtonSqr";
import classes from "./SearchBox.module.css";
import axios from "axios";
const SearchBox = (props) => {
  const [username, setUsername] = useState(props.uname);
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.username(username);
  // };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      props.onUserInfoFetched(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };
  return (
    <form className={classes.searchBox} onSubmit={handleSearch}>
      <input
        value={username}
        type="search"
        className={classes.searchInput}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="Search a github username"
      />
      <ButtonSqr type="submit">
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M14.1211 23.8149C11.3753 23.8149 9.05089 22.8625 7.14801 20.9576C5.24514 19.0527 4.2937 16.7543 4.2937 14.0625C4.2937 11.3706 5.24615 9.07227 7.15105 7.16737C9.05593 5.2625 11.3605 4.31006 14.0649 4.31006C16.7692 4.31006 19.0676 5.2625 20.96 7.16737C22.8524 9.07227 23.7986 11.3725 23.7986 14.0681C23.7986 15.1513 23.6281 16.1884 23.287 17.1795C22.946 18.1705 22.4345 19.1005 21.7524 19.9696L30.7736 28.9158C31.0285 29.1655 31.1559 29.4751 31.1559 29.8445C31.1559 30.2139 31.0285 30.5261 30.7736 30.781C30.5155 31.0418 30.2011 31.1723 29.8303 31.1723C29.4594 31.1723 29.1521 31.0418 28.9084 30.781L19.9247 21.8062C19.1807 22.4378 18.3107 22.9305 17.3147 23.2843C16.3187 23.6381 15.2542 23.8149 14.1211 23.8149ZM14.0868 21.2601C16.0801 21.2601 17.7712 20.557 19.1602 19.1509C20.5492 17.7448 21.2437 16.0486 21.2437 14.0625C21.2437 12.0763 20.5488 10.3802 19.1589 8.97412C17.769 7.568 16.0783 6.86493 14.0868 6.86493C12.0745 6.86493 10.365 7.568 8.95844 8.97412C7.55186 10.3802 6.84858 12.0763 6.84858 14.0625C6.84858 16.0486 7.55143 17.7448 8.95713 19.1509C10.3628 20.557 12.0727 21.2601 14.0868 21.2601Z"
              fill="white"
            />
          </svg>
        }
      </ButtonSqr>
    </form>
  );
};

export default SearchBox;
