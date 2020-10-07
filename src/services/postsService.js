import { httpClient } from "./axios/index";

export const getPost = (postParams) => {
  const { postId } = postParams;
  return httpClient.get(`/posts/${postId}`);
};
