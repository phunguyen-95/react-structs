import { createAction } from "@reduxjs/toolkit";

import * as types from "./type";

const storePrefix = "post";

const getPost = createAction(`${storePrefix}/${types.GET_POST}`);
const getPostSuccess = createAction(`${storePrefix}/${types.GET_POST_SUCCESS}`);
const getPostFailed = createAction(`${storePrefix}/${types.GET_POST_FAILED}`);

export { getPost, getPostSuccess, getPostFailed };
