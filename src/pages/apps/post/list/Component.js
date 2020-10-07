import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "src/store/post/action";


const Component = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost({ postId: 1 }));
    // eslint-disable-next-line
  }, []);

  const { post } = useSelector((state) => state);

  return <div>Post</div>;
};

export default Component;
