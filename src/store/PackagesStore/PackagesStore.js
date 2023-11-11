import axios from "axios";
import { makeAutoObservable } from "mobx";

class PackagesStore {
    packages = {
  isPending: false,
  error: null,
  data: []
    }
  
    constructor() {
      makeAutoObservable(this);
    }
  
    getPackages = async() => {
      try {
        this.packages.isPending = true;
      const {data} = await axios.get(`${process.env.REACT_APP_MAIN_URL}/packages`);
        this.packages.data = data;
      } catch (error) {
        this.packages.error = error;
      } finally {
        this.packages.isPending = false
      }
    }
  }
  
  export const packagesStore = new PackagesStore();