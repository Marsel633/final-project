import React from "react";
import styles from "./Footer.module.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";
import { socialIcons } from "../../assets/arrays";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__about}>
          <div className={styles.footer__logo}>
            <Link className={styles.link} to="/">TravelGo   <SiYourtraveldottv color="#fff" size={30} /></Link>
          </div>
          <p className={styles.logo__info}>
            Book your trip in minute, get full Control for much longer.
          </p>
          <p>
            Travel expands one's worldview and takes a person out of his comfort
            zone. The choice is always yours, to live or to exist
          </p>
        </div>
        <nav className={styles.footer__navbar}>
          <Link className={styles.link} to="/services">Services</Link>
          <Link className={styles.link} to="/contacts">Contacts</Link>
          <Link className={styles.link} to="/more">More</Link>
        </nav>
        <div className={styles.footer__social}>
          {socialIcons.map((item) => (
            <button
            onClick={() => {
              console.log(item);
            }}
            key={item.id}
            className={`${styles[item.name]} ${styles.button}`}
          >
            {item.icon}
          </button>
          ))}
        </div>
      </div>
      <p className={styles.footer__copyright}>Copyright © 2023 TravelGo <span>Powered By Akparov Marsel</span></p>
    </footer>
  );
};

export default Footer;
