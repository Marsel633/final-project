import React from "react";
import { Layout } from "../../shared";
import styles from "./Home.module.scss";
import { Title } from "../../components";
import {
  bookingStepsArray,
  cardsArray,
  chooseCardIconArray,
  locationsArray,
  statisticArray,
} from "../../assets/arrays";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import ItalyImg from "../../assets/italy.jpg";
import { Progress } from "antd";
import seoulImg from "../../assets/seoul.jpg";
import worldMap from "../../assets/world_map.png"
import {TfiLocationPin} from "react-icons/tfi"

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
          {cardsArray.map((item) => (
            <div key={item.id} className={styles.cards__item}>
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
          <p className={`titleDesc ${styles.statistic__desc}`}>
            We always try to make our customer Happy. We provide all kind of{" "}
            <br /> facilities. Your Satisfaction is our main priority.
          </p>
          <div className={styles.statistic__cards}>
            {statisticArray.map((item) => (
              <div key={item.id} className={styles.cards__item}>
                {item.icon}
                <p className={styles.item__title}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`section container ${styles.distinations}`}>
        <Title text="Our Popular Distinations" padding={70} color="#000" />
        <div className={styles.destionations__content}>
          <div className={styles.destionations__map}>
            <img src={worldMap} alt="world map" />
           {[1,2,3].map((id) => (
            <TfiLocationPin className={`${styles[`item-${id}`]} ${styles.map__items}`} key={id} size={23}/>
           ))}
          </div>
          <div className={styles.destionations__locations}>
            {locationsArray.map((item) => (
              <div key={item.id} className={styles.locations__item}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <AiOutlineArrowRight />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`section ${styles.background} ${styles.booking}`}>
        <div className={`container ${styles.bookingWrapper}`}>
          <Title text="Book Your Next Trip in 3 Easy Steps" color="#fff" />
          <p className="titleDesc">Easy and Fast</p>
          <div className={styles.booking__content}>
            <div className={styles.booking__steps}>
              {bookingStepsArray.map((item) => (
                <div key={item.id} className={styles.steps__item}>
                  <span>{item.icon}</span>
                  <div className={styles.item_content}>
                    <h5>{item.title}</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, cumque?
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.booking__choose}>
              <div className={styles.choose__img}>
                <img src={ItalyImg} alt="Italy" />
              </div>
              <h5 className={styles.choose__title}>Trip To Italy</h5>
              <p className={styles.choose__info}>
                <span className={styles.choose__info_date}>19-24 June</span>
                <span className={styles.choose__info_name}>
                  {" "}
                  by Robbin Joseph
                </span>
              </p>
              <div className={styles.choose__icons}>
                {chooseCardIconArray.map((item) => (
                  <div className={styles.choose__icons_wrapper}>
                    <span key={item.id}>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.choose__likes}>
                <div>
                  <HiOutlineBuildingOffice2 />
                  <p>24 people going</p>
                </div>
                <AiOutlineHeart />
              </div>
              <div className={styles.choose__nextTrip}>
                <div className={styles.nextTrip__image}>
                  <img src={seoulImg} alt="Seoul" />
                </div>
                <div className={styles.nextTrip__info}>
                  <span>Ongoing</span>
                  <h5>Trip To Seoul</h5>
                  <div className={styles.info__progress}>
                    <span>
                      <span className={styles.percent}>40%</span> completed
                    </span>{" "}
                    <Progress
                      percent={40}
                      showInfo={false}
                      strokeColor="#8A79DF"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
