import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/authProvider";
import { useAuth } from "./providers/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoutes.jsx";

import Layout from "./Layout.jsx";
import ActivityList from "./ActivityList.jsx";
import ActivitiesDetails from "./ActivityDetails.jsx";
import CreateActivity from "./CreateActivity.jsx";
import EditActivity from "./EditActivity.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ForgetPassword from "./ForgetPassword.jsx";
import OTPInput from "./OTPInput.jsx";
import ResetPassword from "./ResetPassword.jsx";

import TestLoginAPI from "./TestLoginAPI.jsx";
import TestLogoutAPI from "./TestLogoutAPI.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "/signup",
//     element: <Signup/>,
//   },
//   {
//     path: "/settings",
//     element: <Layout>Mock Settings</Layout>,
//   },
//   {
//     path: "/activities",
//     element: <ActivityList />,
//   },
//   {
//     path: "/activities/:activityId",
//     element: <ActivitiesDetails />,
//   },
//   {
//     path: "/activities/create",
//     element: <CreateActivity />,
//   },
//   {
//     path: "/activities/edit/:activityId",
//     element: <EditActivity />,
//   },
//   {
//     path: "/dashboard",
//     element: <Layout>Mock Dashboard</Layout>,
//   },
//   {
//     path: '/nav',
//     element: <Nav/>,
//   },
//   {
//     path: '/forget-password',
//     element: <ForgetPassword/>,
//   },
//   {
//     path: '/email-verification',
//     element: <OTPInput/>,
//   },
//   {
//     path: '/reset-password',
//     element: <ResetPassword/>,
//   },
//   {
//     path: '/test-login-api',
//     element: <TestLoginAPI/>,
//   },
//   {
//     path: '/test-logout-api',
//     element: <TestLogoutAPI/>,
//   },
// ]);

const Routes = () => {
  const { user } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <App />,
    }
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/test-login-api",
      element: <TestLoginAPI />,
    }
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the entire app in a protected route
      children: [
        {
          path: "/test-logout-api",
          element: <TestLogoutAPI />,
        }
      ],
    }
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!user ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
