import { createAction } from "@reduxjs/toolkit";

import * as types from "./type";

const storePrefix = "post";

const getPost = createAction(`${storePrefix}/${types.GET_USER}`);


export { getPost };
