import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./About";
import Inicial from "./Inicial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
