import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login";
import AuthUser from "./middleware/AuthUser";
import Register from "./pages/auth/Register";

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
          <AuthUser>
            <Register />
          </AuthUser>
        ),
      },
      {
        index: true,
        path: "/",
        element: <Home />,
      },

      ////////////// Auth //////////////////
    ],
  },
]);

export default router;
