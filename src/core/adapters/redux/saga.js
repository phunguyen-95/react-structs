import { all } from "redux-saga/effects";
import { postSagas } from "./post/saga";


export function* rootSaga() {
    yield all([postSagas()]);
}