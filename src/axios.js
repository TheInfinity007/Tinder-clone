import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-backend-admin.herokuapp.com/'
});

export default instance;