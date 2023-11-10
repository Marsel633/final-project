import React from "react";
import { Layout } from "../../shared";
import styles from "./Contact.module.scss";
import { Title } from "../../components";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { contactIconsArray } from "../../assets/arrays";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Layout>
      <section className={`background ${styles.contact__bg}`}>
        <h3 className="sectionTitle">Contact</h3>
      </section>
      <section className={`section container ${styles.contact}`}>
        <div className={styles.contact__info}>
          <Title text="Contact Us" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum
            saepe vero ut dicta qui iste repudiandae omnis odit et?
          </p>
         <div className={styles.info__links}>
            <a href="#">
              <TfiLocationPin />
              <span>Ibraimov 115/1, Bishkek, Kyrgyzstan</span>
            </a>
            <a href="#">
              <AiOutlineMail />
              <span>akparov1@gmail.com</span>
            </a>
            <a href="#">
              <FiPhoneCall />
              <span>+996 707 11 26 09</span>
            </a>
         </div>
          <div className={styles.contact__social}>
            <h5 className="titleDesc">Follow Us</h5>
            {contactIconsArray.map((item) => (
              <div className={styles.social__icon} key={item.id}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contact__form}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span>Your Name</span>
              <input className="input" type="text" autocomplete="off" name="name"{...register("name", {required: true})}/>
            </div>
           <div>
              <span>E-mail</span>
              <input className="input" type="email" autocomplete="off" name="email"{...register("email", {required: true} )} />
           </div>
            <div>
              <span>Your Message</span>
                <textarea className="input" name="message" {...register("message",{required: true} )} ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
