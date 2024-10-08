import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import AuthUser from "./middleware/AuthUser";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dishes from "./pages/Dishes/Dishes";
import SingleDish from "./pages/Dishes/SingleDish";
import AllRestaurants from './pages/Restaurants/AllRestaurants';
// import GuestUser from "./middleware/GuestUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: (
          <AuthUser>
            <Login />
          </AuthUser>
        ),
      },
      {
        path: "/register",
        element: (
          // <AuthUser>
            <Register />
          // </AuthUser>
        ),
      },
      {
        index: true,
        path: "/",
        element: <Home />,
      },
       {
         path: "/allrestaurants",
         element: <AllRestaurants />,
       },
      // {
      //   path: "/dishes",
      //   element: <Dishes />,
      // },
      {
        path: "/Singledish/:id",
        element: <SingleDish />,
      },

      ////////////// Auth //////////////////
    ],
  },
]);

export default router;
