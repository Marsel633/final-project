import axios from "axios";
import { makeAutoObservable } from "mobx";

class CounterStore {
  user = {
    isPending: false,
    error: null,
    data: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  registerUser = async (newUser) => {
    try {
      this.user.isPending = true;
      const { data } = await axios.post(
        `${process.env.REACT_APP_MAIN_URL}/signup`,
        newUser
      );
      localStorage.getItem("token", data.accessToken);
      this.user.data = data;
      return this.data.user;
    } catch (error) {
      this.user.error = error;
    } finally {
      this.user.isPending = false;
    }
  };
}

export const counterStore = new CounterStore();
