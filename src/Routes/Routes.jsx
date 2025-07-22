import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import BookNow from "../pages/BookNow/BookNow";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import AddBooks from "../pages/AddBooks/AddBooks";
import Showbooks from "../pages/AddBooks/Showbooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },

      {
        path: "/booknow/:id",
        element: (
          <PrivateRoute>
            <BookNow />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://e-book-library-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbooks",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/showbooks",
        element: (
          <PrivateRoute>
            <Showbooks />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://e-book-library-server.vercel.app/books"),
      },
    ],
  },
]);

export default router;
