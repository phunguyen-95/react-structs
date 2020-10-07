import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[sagaMiddleware]))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
