import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Homepage/Home";

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
  ]);