import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";

import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import "remixicon/fonts/remixicon.css";
import Login from "./components/login/Login";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login-page", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div dir="rtl">
      <Nav />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
