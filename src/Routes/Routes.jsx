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
// import LatestBookCard from "../pages/LatestBooks/LatestBookCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/about',
        element: <About></About>
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
        element: <PrivateRoute><Bookings></Bookings> </PrivateRoute>
      },
      {
        path: '/addbooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/showbooks',
        element: <Showbooks></Showbooks>,
        loader: () => fetch('http://localhost:5000/books')
      }
    ]
  },
]);

export default router