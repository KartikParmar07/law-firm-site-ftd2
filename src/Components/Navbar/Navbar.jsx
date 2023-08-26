import React from "react";
import style from "./Navbar.module.css";
import {ReactComponent as Logo} from "../../Assets/logo.svg"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.links}>
        <a href="/">Home</a>
        <a href="/">Attorneys</a>
        <a href="/">Practice Areas</a>
        <a href="/">About Us</a>
      </div>
      <div>
        <button className={style.btn}>Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
