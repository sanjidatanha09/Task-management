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
import PreviousTask from './DasboardUser/PreviousTask/PreviousTask';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskUpdate from './DasboardUser/updateTAsk/TaskUpdate';

const queryClient = new QueryClient();

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
        loader: () => fetch('http://localhost:5000/newtaskget')
      },
      {
        path: '/project',
        element: <Project></Project>,
        loader: () => fetch('http://localhost:5000/getproject')
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
      {
        path: 'previoustask',
        element: <PreviousTask></PreviousTask>,
        

      },
      ,
      {
        path: 'updateTask/:id',
        element: <TaskUpdate></TaskUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/taskupdate/${params.id}`)


      },
    
      




    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />

      </QueryClientProvider>

     

    </AuthProvider>
  </React.StrictMode>,
)
