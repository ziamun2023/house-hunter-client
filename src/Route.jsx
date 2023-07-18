import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Homepage/Home";
import SignUpRenter from "./Pages/SignUpRenter.jsx/SignUpRenter";
import SignupOwner from "./Pages/SignUpRenter.jsx/SignupOwner";
import OwnerDashBoard from "./Pages/Dashboards/OwnerDashboard/OwnerDashBoard";
import AddAnewProperty from "./Pages/Dashboards/OwnerDashboard/AddAnewProperty";
import Myproperty from "./Pages/Dashboards/OwnerDashboard/Myproperty";
import Edititems from "./Pages/Dashboards/OwnerDashboard/Edititems";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
    {
        path:'/',
        element:<Home/>

    }
      ]
    },
    {
        path: '/signUpasRent',
        element:<SignUpRenter/>
    },
    {
        path: '/signupOwner',
        element:<SignupOwner/>
    },
    
    {
        path: 'OwnerDashBoard',
        element:<OwnerDashBoard/>,
        children:[
          {
            path:'/OwnerDashBoard/addnewProperty',
            element:<AddAnewProperty/>

          },
          {
            path:'/OwnerDashBoard/Myproperty',
            element:<Myproperty/>

          },
          {
            path:'/OwnerDashBoard/edit/:email',
            element:<Edititems/>

          }
        ]
    },
    
  ]);