import React, { useState, useEffect } from "react";
import { ProfileLayout, Title } from "../../components";
import styles from "./MyProfile.module.scss";
import { USALocations, profileItemsArray } from "../../assets/arrays";
import CountUp from "react-countup";
import { Statistic } from "antd";
import stateOfLiberty from "../../assets/stateOfLiberty.svg";
import promoteImage from "../../assets/promoteImage.png"
import { Button2 } from "../../shared";
import { TfiLocationPin } from "react-icons/tfi";
import {AiFillStar} from "react-icons/ai"
import {BsArrowRight} from "react-icons/bs"


const MyProfile = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(currentDateTime);
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <ProfileLayout>
      <section className={styles.mainPage}>
        <Title text="Today" />
        <p className={styles.date}>{formattedDateTime}</p>
        <div className={styles.mainPage__statistic}>
          {profileItemsArray.map((item) => (
            <div key={item.id} className={styles.mainPage__item}>
              <h3>{item.title}</h3>
              <div className={styles.item__info}>
                <p>
                  <Statistic value={item.completed} formatter={formatter} />
                  <span>{item.percent}</span>
                </p>
                <span className={styles.item__icon}>{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.mainPage__content}>
          <div className={styles.content__locations}>
            <div className={styles.locations__title}>
              <div>
                <h3>Best Destinations in USA</h3>
                <img src={stateOfLiberty} alt="state of liberty icon" />
              </div>
              <div className={styles.locations__items}>
                {USALocations.map((item)=>(
                  <div className={styles.locations__item}>
                      <img src={item.image} alt={item.title} />
                      <div className={styles.item__desc}>
                        <h5>{item.title}</h5>
                        <p><TfiLocationPin/>United States of America<AiFillStar/>4.5</p>
                      </div>
                      <BsArrowRight/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.content__promote}>
            <img src={promoteImage} alt="plane bag image" />
            <p>Let’s Explore The Beauty Of United Kingdom</p>
            <Button2>Explore</Button2>
          </div>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default MyProfile;
