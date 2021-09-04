import axios from "axios";

const instance= axios.create({
    baseURL:"https://uptron-tiktok-mern.herokuapp.com/",
});

export default instance;