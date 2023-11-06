import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../shared";
import { IoIosLogIn } from "react-icons/io";
import {SiYourtraveldottv} from "react-icons/si"

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link to="/">TravelGo</Link>
          <SiYourtraveldottv color="#fff" size={30}/>
        </div>
        <div className={styles.header__navbar}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className={styles.header__login}>
          <Button type="button">
            <span>
              <IoIosLogIn size={20}/>
            </span>
            Login
          </Button>
          <Button type="button">
            <span>
              <IoIosLogIn size={20}/>
            </span>
            Sign In
          </Button>
        </div>
    </header>
  );
};

export default Header;
