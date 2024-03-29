import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/index.css";
import router from "./router";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
