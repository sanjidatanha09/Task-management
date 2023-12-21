import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Home/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './Login/Login';
import Registration from './Login/Registration';
import Type from './Page/Whattype/Type';
import Dashboard from './Dashboard/Dashboard';
import NewTask from './DasboardUser/NewTask/NewTask';
import Task from './Page/Task/Task';
import Project from './Page/Project/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/task',
        element:<Task></Task>,
      },
      {
        path: '/project',
        element: <Project></Project>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/type',
        element: <Type></Type>,
      },



   

    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: 'newtask',
        element: <NewTask></NewTask>,

      },
    
      




    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
