import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from '../App';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import bookDetails from '../Pages/bookDetails/bookDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        path: "/",
        Component: Home

      },
      {
        path: "/about",
        Component: About
      },
      {
        path: '/bookDetails/:id',
        Component:bookDetails
    }

    ]
  }
]);