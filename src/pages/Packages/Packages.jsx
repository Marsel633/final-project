import React, { useEffect } from 'react'
import { ProfileLayout, Title } from '../../components'
import styles from "./Packages.module.scss"
import { observer } from 'mobx-react-lite'
import { TfiLocationPin } from "react-icons/tfi";
import { packagesStore } from '../../store';


const Packages = observer(() => {
  const {getPackages, packages} = packagesStore;
  useEffect(() => {
    getPackages();
  }, [])

  return (
    <ProfileLayout>
      <section className={styles.packages}>
        <Title
        text="Best Packages For You"
        padding={50}
        />
      <div className={styles.packages__items}>
        {packages.data.map((item) => (
          <div key={item.id} className={styles.packages__item}>
              <div className={styles.item__image}>
                <img src={item.image} alt={item.location} />
              </div>
              <div className={styles.item__time_price}>
                <p>{item.time}</p>
                <p>{item.price}</p>
              </div>
              <div className={styles.item__location}>
                <p><TfiLocationPin/><span>{item.location}</span></p>
              </div>
          </div>
        ))}
      </div>
      </section>
    </ProfileLayout>
  )
})

export default Packages