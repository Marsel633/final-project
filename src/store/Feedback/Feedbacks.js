import axios from "axios";
import { makeAutoObservable } from "mobx";

class AddFeedbackStore {
  feedbacks = {
    isPending: false,
    error: null,
    data: {},
  };

  constructor() {
    makeAutoObservable(this);
  }

  addFeedback = async (newFeedback) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_MAIN_URL}/feedbacks`,
        newFeedback
      );
      alert("you feedback completed");
      this.feedbacks.data = data;
    } catch (error) {
      this.feedbacks.error = error;
    } finally {
      this.feedbacks.isPending = false;
    }
  };
}

export const addFeedbackStore = new AddFeedbackStore();

class GetFeedbackStore {
  feedback = {
    isPending: false,
    error: null,
    data: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  getFeedback = async () => {
    try {
      this.feedback.isPending = true;
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/feedbacks`
      );
      this.feedback.data = data;
    } catch (error) {
      this.feedback.error = error;
    } finally {
      this.feedback.isPending = false;
    }
  };
}

export const getFeedbackStore = new GetFeedbackStore();
