import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";
export const axiosClient = axios.create({
  baseURL,
  timeout: 1000,
  headers: {},
});