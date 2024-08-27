import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { Toaster } from "react-hot-toast";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </Provider>
);
