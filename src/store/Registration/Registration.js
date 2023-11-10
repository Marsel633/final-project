import axios from "axios";
import { makeAutoObservable } from "mobx";

class UserStore {
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
        `${process.env.REACT_APP_MAIN_URL}/users`,
        newUser
      );
      localStorage.setItem("token", data.accessToken);
      this.user.data = data;
      return data;
    } catch (error) {
      this.user.error = error;
    } finally {
      this.user.isPending = false;
    }
  };
}

export const userStore = new UserStore();
