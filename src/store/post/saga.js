import { all, put, takeLatest } from "redux-saga/effects";
import { postService } from "src/services/index";

import { getPost, getPostSuccess, getPostFailed } from "./action";


export function* getPostsSaga(action) {
  try {
    const { payload } = action;
    const response = yield postService.getPost(payload);
    yield put(getPostSuccess(response?.data));
  } catch (e) {
    yield put(getPostFailed(e));
    throw e;
  }
}

export function* postSagas() {
  yield all([takeLatest(getPost.type, getPostsSaga)]);
}
