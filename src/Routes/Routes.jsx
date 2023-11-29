import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import BookNow from "../pages/BookNow/BookNow";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'booknow/:id',
        element: <BookNow></BookNow>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings',
        element:  <Bookings></Bookings>
      }
    ]
  },
]);

export default router