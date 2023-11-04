import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/mainlogo_svg.svg";
import { Button } from "../../shared";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link to="/">TravelGo</Link>
          <img src={Logo} alt="Logo icon" />
        </div>
        <div className={styles.header__navbar}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
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
