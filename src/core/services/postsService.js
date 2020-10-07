import { axiosClient } from "../adapters";

export const getPost = (postParams) => {
  const { postId } = postParams;
  return axiosClient.get(`/posts/${postId}`);
};
