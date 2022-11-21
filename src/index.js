import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//Quand on indique juste un dossier, c'est le index.js qui est lu automatiquement
import rootReducer from "./reducers/index";
//Redux
const store = configureStore(
  {
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // // <React.StrictMode>
  <Provider store={store}>
    {" "}
    <App />
  </Provider>

  // </React.StrictMode>
);
