import axios from "axios";
import { CREATED, OK, UNAUTHORIZED } from "src/constants/index";

const accessToken = "accessToken_abc";
const refreshAccessToken = "refreshAccessToken_abc";

const baseURL = "https://jsonplaceholder.typicode.com";
export const axiosClient = axios.create({
  baseURL,
  timeout: 1000,
  headers: {},
});

axiosClient.interceptors.request.use(
  (config) => {
    let newConfig = config;

    if (accessToken) {
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === UNAUTHORIZED &&
      originalRequest.url.includes("/auth/token")
    ) {
      return Promise.reject(error);
    }
    if (error.response.status === UNAUTHORIZED && !originalRequest._retry) {
      const res = await axiosClient.post("./token/auth", {
        refresh_token: refreshAccessToken,
      });
      if (res.status === CREATED || res.status === OK) {
        // update accessToken
        originalRequest.headers = {
          ...originalRequest,
          Authorization: `Bearer ${accessToken}`,
        };
        return axiosClient(originalRequest);
      }
    }
    return Promise.reject("error");
  }
);
