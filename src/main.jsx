import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProvideLayout from "./Utils/useGetInfos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideLayout>
      <Routes />
    </ProvideLayout>
    <ToastContainer />
  </React.StrictMode>
);
