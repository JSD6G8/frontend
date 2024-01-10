import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import ActivityList from './ActivityList.jsx'
import CreateActivity from './CreateActivity.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Layout>Mock Login</Layout>,
  },
  {
    path: '/signup',
    element: <Layout>Mock Sign Up</Layout>,
  },
  {
    path: '/settings',
    element: <Layout>Mock Settings</Layout>,
  },
  {
    path: '/activities',
    element: <ActivityList />,
  },
  {
    path: '/activities/create',
    element: <CreateActivity />,
  },
  {
    path: '/activities/edit',
    element: <Layout>Mock Edit Activity</Layout>,
  },
  {
    path: '/dashboard',
    element: <Layout>Mock Dashboard</Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
