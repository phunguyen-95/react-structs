import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, rootSaga } from "./adapters";

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

export * from "./adapters";
export * from "./services";
