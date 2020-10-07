import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Container from "./pages/container/Container";
import { configureStore } from "./store/index";

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Container />
    </Provider>
  );
};

export default App;
