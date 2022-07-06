import axios from "axios";
import config from "./config";



const token = localStorage.getItem("token")

const request = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



request.interceptors.request.use(async (config: any) => {
  if (token) config.headers.Authorization = `${token}`;
  console.log(config?.url);
  return config;
});


export default request;
