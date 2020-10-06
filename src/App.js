import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./core";

import "./App.css";
import Container from "./pages/container/Container";

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Container />
    </Provider>
  );
};

export default App;
