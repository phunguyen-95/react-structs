import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPost } from "../../core/adapters/redux/post/action";

const Post = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  const { post } = useSelector((state) => state);

  return <div>Post</div>;
};

export default Post;
