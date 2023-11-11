import React from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared";
import {SiYourtraveldottv} from "react-icons/si"


const Header = () => {
const navigate = useNavigate();

  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link className={styles.link} to="/">TravelGo<SiYourtraveldottv color="#fff" size={30}/></Link>
        </div>
        <div className={styles.header__navbar}>
          <Link className={styles.link} to="/home">Home</Link>
          <Link className={styles.link} to="/about">About</Link>
          <Link className={styles.link} to="/services">Services</Link>
          <Link className={styles.link} to="/contact">Contact</Link>
        </div>
        <div className={styles.header__login}>
          <Button onClick={()=>{navigate("/login")}} type="button">
            Login
          </Button>
          <Button onClick={() => {navigate("/profile")}} type="button">
            My Profile
          </Button>
        </div>
    </header>
  );
};

export default Header;
