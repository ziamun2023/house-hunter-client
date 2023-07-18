import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Homepage/Home";
import SignUpRenter from "./Pages/SignUpRenter.jsx/SignUpRenter";

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
    
  ]);