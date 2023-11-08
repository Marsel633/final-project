import React from "react";
import { Layout } from "../../shared";
import styles from "./About.module.scss";
import travelGif from "../../assets/travelGif.gif";
import {
  aboutDescriptionArray,
  aboutStatisticArray,
  statisticItemsArray,
} from "../../assets/arrays";
import { Statistic } from "antd";
import CountUp from "react-countup";

const About = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <Layout>
      <section className={`section background ${styles.about}`}>
        <h1 className="sectionTitle">About Us</h1>
      </section>
      <section className={`section container ${styles.about__history}`}>
        <div className={styles.about__slogan}>
          <span>TravelGo</span>
          <p>
            One Touch Of Nature Makes <br /> The Whole World Kin
          </p>
          <div className={styles.about__gif}>
            <img src={travelGif} alt="" />
          </div>
        </div>
        <div className={styles.history}>
          {aboutDescriptionArray.map((item) => (
            <p key={item.id}>{item}</p>
          ))}
        </div>
      </section>
      <section className={`section container ${styles.about__statistic}`}>
        <div className={styles.statistic}>
          <div className={styles.statistic__title}>
            <span>Some Cool Facts</span>
            <p>Numbers Speak For Themselves</p>
          </div>
          <div className={styles.statistic__info}>
            {aboutStatisticArray.map((item) => (
              <div key={item.id}>
                <Statistic value={`${item.num}`} formatter={formatter} />
                <span className={styles.desc}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.statistic__content}>
          <h3>
            Some text here Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus illum natus eius recusandae officiis cumque a odit
            facere aspernatur, architecto beatae debitis cum culpa.
          </h3>
          <div className={styles.statistic__items}>
            {statisticItemsArray.map((item) => (
              <div key={item.id} className={styles.statistic__item}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
