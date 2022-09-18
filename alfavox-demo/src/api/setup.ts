import axios from "axios";
import config from "./../data/api-setup.json";

console.log(config.url);

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-type": "application/json",
  },
  params: {
    api_key: config.key,
    lang: "en",
    limit: config.limit,
  },
});

export default axiosInstance;
