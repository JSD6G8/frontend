import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/authProvider";
import { useAuth } from "./providers/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoutes.jsx";

import AboutUs from "./AboutUs.jsx";
import ActivitiesDetails from "./ActivityDetails.jsx";
import ActivityList from "./ActivityList.jsx";
import CreateActivity from "./CreateActivity.jsx";
import EditActivity from "./EditActivity.jsx";
import Layout from "./Layout.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Logout from "./Logout.jsx";
import ForgetPassword from "./ForgetPassword.jsx";
import OTPInput from "./OTPInput.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Settings from "./Settings.jsx";
import EditProfile from "./EditProfile.jsx";
import ChangePassword from "./ChangePassword.jsx";

const Routes = () => {
  const { user } = useAuth();

  const routesForPublic = [
    {
      path: "/aboutus",
      element: <AboutUs />,
    }
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/email-verification",
      element: <OTPInput />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the entire app in a protected route
      children: [
        {
          path: "/",
          element: <ActivityList />,
        },
        {
          path: "/activities",
          element: <ActivityList />,
        },
        {
          path: "/activities/:activityId",
          element: <ActivitiesDetails />,
        },
        {
          path: "/activities/create",
          element: <CreateActivity />,
        },
        {
          path: "/activities/edit/:activityId",
          element: <EditActivity />,
        },
        {
          path: "/dashboard",
          element: <Layout>Mock Dashboard</Layout>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: '/profile/edit/:Id',
          element: <EditProfile />,
        },
        {
          path: '/change-password',
          element: <ChangePassword />,
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
