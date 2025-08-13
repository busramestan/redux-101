import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";
import { store } from "app/store";
import { Provider } from "react-redux";
import Counter from "app/counter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
);
