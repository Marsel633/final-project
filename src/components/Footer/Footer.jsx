import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../assets/mainlogo_svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <div className={styles.logo__icon}>
          <Link to="/">TravelGo</Link>
          <img src={Logo} alt="Logo icon" />
        </div>
        <p className={styles.logo__info}>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <nav className={styles.footer__navbar}>
        <div className={styles.navbar__company}>comp</div>
        <div className={styles.navbar__contacts}>cont</div>
        <div className={styles.navbar__more}>more</div>
      </nav>
      <div className={styles.footer__social}>
        social
      </div>
    </footer>
  );
};

export default Footer;
