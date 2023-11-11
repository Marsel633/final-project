import React, { useEffect } from "react";
import { Loader, ProfileLayout, Title, topAnimation } from "../../components";
import styles from "./Packages.module.scss";
import { observer } from "mobx-react-lite";
import { TfiLocationPin } from "react-icons/tfi";
import { packagesStore } from "../../store";
import { motion } from "framer-motion";

const Packages = observer(() => {
  const { getPackages, packages } = packagesStore;
  useEffect(() => {
    getPackages();
  }, []);

  if (packages.isPending) {
    return <Loader />;
  }

  return (
    <ProfileLayout>
      <section className={styles.packages}>
        <Title text="Best Packages For You" padding={50} />
        <motion.div initial="hidden" whileInView="visible" className={styles.packages__items}>
          {packages.data.map((item) => (
            <motion.div
              variants={topAnimation}
              key={item.id}
              className={styles.packages__item}
            >
              <div className={styles.item__image}>
                <img src={item.image} alt={item.location} />
              </div>
              <div className={styles.item__time_price}>
                <p>{item.time}</p>
                <p>{item.price}$ Person</p>
              </div>
              <div className={styles.item__location}>
                <p>
                  <TfiLocationPin />
                  <span>{item.location}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ProfileLayout>
  );
});

export default Packages;
