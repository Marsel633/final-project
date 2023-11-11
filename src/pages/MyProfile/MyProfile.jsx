import React, { useState, useEffect } from "react";
import { ProfileLayout, Title } from "../../components";
import styles from "./MyProfile.module.scss";
import { profileItemsArray } from "../../assets/arrays";
import CountUp from "react-countup";
import { Statistic } from "antd";

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
          
        </div>
      </section>
    </ProfileLayout>
  );
};

export default MyProfile;
