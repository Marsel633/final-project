import React, { useEffect } from "react";
import styles from "./Feedback.module.scss";
import { Loader, ProfileLayout, Title } from "../../components";
import { useForm } from "react-hook-form";
import { addFeedbackStore, getFeedbackStore } from "../../store";



const Feedback = () => {
  const { register, reset, handleSubmit } = useForm();
  const {feedbacks, addFeedback} = addFeedbackStore;
  const onSubmit = (values) => {
    addFeedback(values);
    reset();
  };

  if(feedbacks.isPending){
    return <Loader/>
  }

  return (
    <ProfileLayout>
      <section className={styles.feedback}>
        <Title text="Leave Your Feedback" padding={30} />
        <div className={styles.feedback__content}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="input"
              placeholder="Name"
              autocomplete="off"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              autocomplete="off"
              {...register("email", { required: true })}
            />
             <input
              type="text"
              className="input"
              placeholder="Location"
              autocomplete="off"
              {...register("location", { required: true })}
            />
            <input type="file" 
            {...register("image", {required: true})}/>
            <textarea
              className="input"
              placeholder="Message"
              autocomplete="off"
              name="message"
              {...register("message", { required: true })}
            ></textarea>
            <button type="submit">Send Feedback</button>
          </form>
          <div className={styles.feedback__image}>
            <div className={styles.image__blur}>
              <p>
                Share with us every moment of your journey so that we can
                preserve them in our memory!
              </p>
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/435/400/original/asian-woman-traveler-using-camera-and-travel-cutout-isolated-transparent-background-png.png"
                alt="backgound picture"
              />
            </div>
          </div>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default Feedback;
