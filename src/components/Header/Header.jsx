import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../shared";
import {SiYourtraveldottv} from "react-icons/si"
import useNav from "../UseNav/UseNav";

const Header = () => {
const {goTo} = useNav();

  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link className={styles.link} to="/">TravelGo<SiYourtraveldottv color="#fff" size={30}/></Link>
        </div>
        <div className={styles.header__navbar}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/about">About</Link>
          <Link className={styles.link} to="/services">Services</Link>
          <Link className={styles.link} to="/contact">Contact</Link>
        </div>
        <div className={styles.header__login}>
          <Button onClick={()=>{goTo("/login")}} type="button">
            Login
          </Button>
          <Button onClick={() => goTo("/signup")} type="button">
            Sign Up
          </Button>
        </div>
    </header>
  );
};

export default Header;
