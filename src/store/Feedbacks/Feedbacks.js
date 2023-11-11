import axios from "axios";
import { makeAutoObservable } from "mobx";

class AddFeedbackStore {
    feedbacks = {
        isPending: false,
        error: null,
        data: {}
    }

    constructor(){
        makeAutoObservable(this);
    }
    
    addFeedback = async(newFeedback) => {
        try {
            this.feedbacks.isPending = true;
            const {data} = await axios.post(`${process.env.REACT_APP_MAIN_URL}/feedbacks`, newFeedback)
            this.feedbacks.data = data;
        } catch (error) {
            this.feedbacks.error = error;
        } finally {
            this.feedbacks.isPending = false;
        }
    }
}

export const addFeedbackStore = new AddFeedbackStore();