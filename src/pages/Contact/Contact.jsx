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
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
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
              <input
                className="input"
                type="text"
                autocomplete="off"
                name="name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <span>E-mail</span>
              <input
                className="input"
                type="email"
                autocomplete="off"
                name="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <span>Your Message</span>
              <textarea
                className="input"
                name="message"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
      <section className="section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.707469019647!2d74.62000489030021!3d42.87402906258874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb91e2d4ad4f9%3A0x6a6ef20aabeb8d3e!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCQ0YHRi9C7LdCi0LDRiCI!5e0!3m2!1sru!2skg!4v1699600466623!5m2!1sru!2skg"
          width="100%"
          height="650"
          style={{border: 0, paddingTop: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
