import React from "react";
import { Layout } from "../../shared";
import {
  Title,
  bottomAnimation,
  leftAnimation,
  rigthAnimation,
  topAnimation,
} from "../../components";
import {
  bookingStepsArray,
  cardsArray,
  chooseCardIconArray,
  locationsArray,
  statisticArray,
  carouselImages,
} from "../../assets/arrays";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";
import { Progress, Statistic } from "antd";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ItalyImg from "../../assets/italy.jpg";
import seoulImg from "../../assets/seoul.jpg";
import worldMap from "../../assets/world_map.png";
import styled from "styled-components";
import styles from "./Home.module.scss";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    opacity: 1;
    width: 5px;
  }
  > .slick-dots li.slick-active button {
    background: #000000;
  }
  > .slick-track {
    height: auto;
  }
`;

const CarouselFunc = () => {
  return (
    <CarouselWrapper dotPosition="left">
      {carouselImages.map((item) => (
        <div className={styles.carousel}>
          <div className={styles.carousel__image}>
            <img key={item.id} src={item.image} alt={item.name} />
          </div>
          <div className={styles.feedback__item}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus facilis inventore consequatur recusandae voluptates.
              Voluptate fugit incidunt nemo similique. Suscipit, ipsum fugit aut
              impedit voluptate sequi illo illum aspernatur dignissimos numquam
              optio voluptas, molestias quibusdam ex hic? Itaque veniam ratione
              tempore doloribus earum quas placeat, perferendis deleniti ipsum
              sint culpa.
            </p>
            <span>— John Doe</span>
          </div>
        </div>
      ))}
    </CarouselWrapper>
  );
};

const Home = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <Layout>
      <section className={`background ${styles.home}`}>
        <h1 className="sectionTitle">
          Your Imagination Is <br /> Your Only Limit
        </h1>
      </section>
      <section className={`section container ${styles.ourServiece}`}>
        <Title text="Our Service" padding={63} color="#000" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          className={styles.ourService__cards}
        >
          {cardsArray.map((item) => (
            <motion.div
              variants={topAnimation}
              key={item.id}
              className={styles.cards__item}
            >
              {item.icon}
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className={`section background ${styles.statistic}`}>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            className={styles.statistic__cards}
          >
            {statisticArray.map((item) => (
              <motion.div
                variants={bottomAnimation}
                key={item.id}
                className={styles.cards__item}
              >
                {item.icon}
                <div className={styles.item__title}>
                  <Statistic
                    value={`${item.title.number}`}
                    formatter={formatter}
                  />
                  <span>{item.title.string}</span>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className={`section container ${styles.distinations}`}>
        <Title text="Our Popular Distinations" padding={70} color="#000" />
        <div className={styles.destionations__content}>
          <div className={styles.destionations__map}>
            <img src={worldMap} alt="world map" />
            {[1, 2, 3].map((id) => (
              <TfiLocationPin
                className={`${styles[`item-${id}`]} ${styles.map__items}`}
                key={id}
                size={23}
              />
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className={styles.destionations__locations}
          >
            {locationsArray.map((item) => (
              <motion.div
                variants={rigthAnimation}
                key={item.id}
                className={styles.locations__item}
              >
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <AiOutlineArrowRight />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className={`section background ${styles.booking}`}>
        <div className={`container ${styles.bookingWrapper}`}>
          <Title text="Book Your Next Trip in 3 Easy Steps" color="#fff" />
          <p className="titleDesc">Easy and Fast</p>
          <div className={styles.booking__content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              className={styles.booking__steps}
            >
              {bookingStepsArray.map((item) => (
                <motion.div
                  variants={leftAnimation}
                  key={item.id}
                  className={styles.steps__item}
                >
                  <span>{item.icon}</span>
                  <div className={styles.item_content}>
                    <h5>{item.title}</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, cumque?
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={styles.booking__choose}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
      <section className={`section container ${styles.feedbacks}`}>
        <Title text="What People Say About Us" padding={60} />
        <div className={styles.feedbacks__carousel}>
          <CarouselFunc />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
