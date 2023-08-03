import React from "react";
import classes from "./Navbar.module.css";
import ButtonSm from "../UI/ButtonSm";
const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <p className={classes.logo}>Github Checker</p>
      <ul className={classes.ulContainer}>
        {/* <div className={classes.avatar}>
          <img src={props.avatarimg} alt={props.avatarName + " photo"} />
        </div>
        <p className={classes.avatarName}>props.avatarname</p> */}
        <ButtonSm onClick={props.onLogout}>Log out</ButtonSm>
      </ul>
    </nav>
  );
};
export default Navbar;
