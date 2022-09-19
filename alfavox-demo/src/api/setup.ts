import axios from "axios";
import config from "./../data/api-setup.json";

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    api_key: config.key,
  },
});

export default axiosInstance;
