import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ActivityList from "./ActivityList.jsx";
import Nav from "./components/Nav.jsx";
import CreateActivity from "./CreateActivity.jsx";
import Layout from "./Layout.jsx";
import Login from "./Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedCard from "./components/ListedCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Layout>Mock Sign Up</Layout>,
  },
  {
    path: "/settings",
    element: <Layout>Mock Settings</Layout>,
  },
  {
    path: "/activities",
    element: <ActivityList />,
  },
  {
    path: "/activities/create",
    element: <CreateActivity />,
  },
  {
    path: "/activities/edit",
    element: <Layout>Mock Edit Activity</Layout>,
  },
  {
    path: "/dashboard",
    element: <Layout>Mock Dashboard</Layout>,
  },
  {
    path: "/nav",
    element: <Nav />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
