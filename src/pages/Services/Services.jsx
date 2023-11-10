import React from "react";
import { Layout } from "../../shared";
import styles from "./Services.module.scss";
import { Title } from "../../components";
import travelForSoul from "../../assets/servicesImage.jpg";
import { infoItemsArray, servicesText } from "../../assets/arrays";

const Services = () => {
  return (
    <Layout>
      <section className={`background ${styles.services__bg}`}>
        <h1 className="sectionTitle">Services</h1>
      </section>
      <section className={`section container ${styles.services__content}`}>
        <div className={styles.services__title}>
          <h5 className="titleDesc">What We Do</h5>
          <Title text="We Give People The Opportunity to be Happy" />
          {servicesText.map((item) => (
            <p key={item.id}>{item}</p>
          ))}
        </div>
        <div className={styles.services__image}>
          <img src={travelForSoul} alt="travel is good for soul" />
        </div>
      </section>
      <section className={`section container ${styles.services__info}`}>
            <h5 className="titleDesc">Services</h5>
            <Title
            text="Go Along With Travel"
            />
            <div className={styles.info__items}>
              {infoItemsArray.map((item) => (
               <div className={styles.info__item}>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
               </div>
              ))}
            </div>
      </section>
    </Layout>
  );
};

export default Services;
