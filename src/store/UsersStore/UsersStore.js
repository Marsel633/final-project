import axios from "axios";
import { makeAutoObservable } from "mobx";

class UserStore {
  user = {
    isPending: false,
    error: null,
    data: {},
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
    } catch (error) {
      this.user.error = error;
    } finally {
      this.user.isPending = false;
    }
  };
}

export const userStore = new UserStore();

class GetUserStore {
  userInfo = {
isPending: false,
error: null,
data: {}
  }

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = async() => {
    try {
      this.userInfo.isPending = true;
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/users`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      this.userInfo.data = data;
    } catch (error) {
      this.userInfo.error = error;
    } finally {
      this.userInfo.isPending = false
    }
  }
}

export const getUserStore = new GetUserStore();

class UserDataStore {
  userData = {
    isPending: false,
    error: null,
    data: {}
  }

  constructor() {
    makeAutoObservable(this);
  }

  getUserData = async() => {
    try {
      this.userData.isPending = true;
      const {data} = await axios.get(`${process.env.REACT_APP_MAIN_URL}/users`);
      this.userData.data = data;
    } catch (error) {
      this.userData.error = error;
    } finally {
      this.userData.isPending = false;
    }
  }
}

export const userDataStore = new UserDataStore();