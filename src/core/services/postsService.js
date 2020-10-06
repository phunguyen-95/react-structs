import { axiosClient } from "../adapters";

export const getPost = () => {
  return axiosClient.get("/posts");
};
