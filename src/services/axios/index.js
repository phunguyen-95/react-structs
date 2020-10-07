import axios from "axios";
import { OK, UNAUTHORIZED, CREATED } from "src/constants/index";

const accessToken = "accessToken_abc";
const refreshAccessToken = "refreshAccessToken_abc";

const baseURL = "https://jsonplaceholder.typicode.com";
export const httpClient = axios.create({
  baseURL,
  timeout: 1000,
  headers: {},
});

httpClient.interceptors.request.use(
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

httpClient.interceptors.response.use(
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
      const res = await httpClient.post("./token/auth", {
        refresh_token: refreshAccessToken,
      });
      if (res.status === CREATED || res.status === OK) {
        // update accessToken
        originalRequest.headers = {
          ...originalRequest,
          Authorization: `Bearer ${accessToken}`,
        };
        return httpClient(originalRequest);
      }
    }
    return Promise.reject("error");
  }
);
