import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Layout from "./Layout.jsx";
import ActivityList from "./ActivityList.jsx";
import ActivitiesDetails from "./ActivityDetails.jsx";
import CreateActivity from "./CreateActivity.jsx";
import EditActivity from "./EditActivity.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedCard from "./components/ListedCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
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
    path: "/activities/:id",
    element: <ActivitiesDetails />,
  },
  {
    path: "/activities/create",
    element: <CreateActivity />,
  },
  {
    path: "/activities/edit",
    element: <EditActivity />,
  },
  {
    path: "/dashboard",
    element: <Layout>Mock Dashboard</Layout>,
  },
  {
    path: '/nav',
    element: <Nav/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
