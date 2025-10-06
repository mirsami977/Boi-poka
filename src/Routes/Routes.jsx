import React from 'react';
import { createBrowserRouter } from "react-router";
 import { RouterProvider } from "react-router/dom";
import App from '../App';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/Errorpage';
import Home from '../Pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<ErrorPage></ErrorPage> ,
   children: [
    {
        index:true ,
        loader:()=>fetch('booksData.json'),
        path:"/",
     Component: Home

    }
   ]
  }
]);