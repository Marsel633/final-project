import React from "react";
import { Layout } from "../../shared";
import styles from "./Home.module.scss";
import { Title } from "../../components";
import { cardsArray, locationsArray, statisticArray } from "../../assets/data";
import {AiOutlineArrowRight} from "react-icons/ai"
// import map from "../../assets/map.png"


const Home = () => {
  return (
    <Layout>
      <section className={`${styles.background} ${styles.home}`}>
        <h1>
          Your Imagination Is <br /> Your Only Limit
        </h1>
      </section>
      <section className={`section container ${styles.ourServiece}`}>
        <Title text="Our Service" padding={63} color="#000" />
        <div className={styles.ourService__cards}>
          {cardsArray.map((item, id) => (
            <div key={id} className={styles.cards__item}>
                {item.icon}
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={`section ${styles.background} ${styles.statistic}`}>
       <div className={`container ${styles.statisticWrapper}`}>
            <Title
              text="We always try to give you the best service"
              padding={20}
              color="#fff"
            />
            <p className={styles.statistic__desc}>
              We always try to make our customer Happy. We provide all kind of{" "}
              <br /> facilities. Your Satisfaction is our main priority.
            </p>
            <div className={styles.statistic__cards}>
                {statisticArray.map((item, id) => (
                    <div key={id} className={styles.cards__item}>
                        {item.icon}
                        <p className={styles.item__title}>{item.title}</p>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
       </div>
      </section>
      <section className={`section container ${styles.distinations}`}>
        <Title
        text="Our Popular Distinations"
        padding={70}
        color="#000"
        />
        <div className={styles.destionations__content}>
            <div className={styles.destionations__map}>
                {/* <img src={map} alt="map" /> */}
            </div>
            <div className={styles.destionations__locations}>
                {locationsArray.map((item) => (
                    <div className={styles.locations__item}>
                        <div><img src={item.image} alt={item.title} /></div>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                        <AiOutlineArrowRight/>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
