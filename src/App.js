import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import LayoutContainer from "./pages/container/ContainerLayout";
import { configureStore } from "./store/index";

const App = () => {
  return (
    <Provider store={configureStore()}>
      <LayoutContainer />
    </Provider>
  );
};

export default App;
