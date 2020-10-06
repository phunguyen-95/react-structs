import { put, all, takeLatest } from "redux-saga/effects";
import { postService } from "../../../services";
import { getPost } from "./action";

export function* getPostsSaga(payload) {
  try {
    console.log("-payload--", payload);
    const response = yield postService.getPost();
    console.log("--response-", response);
  } catch (e) {
    throw e;
  }
}

export function* postSagas() {
  yield all([takeLatest(getPost.type, getPostsSaga)]);
}
