import React from "react";
import Biriyani from "../../assets/youtube-banner-2560x1140.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>GRAB & EAT</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Biriyani} alt="A table of Foods" />
      </div>
    </>
  );
};

export default Header;
