import axios from "axios";

export const appAxios = axios.create({
  baseURL: process.env.REACT_APP_PROD_BASE_SERVER_URL,
});
