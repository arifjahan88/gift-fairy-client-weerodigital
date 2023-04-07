import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Conatct from "../Components/Contact/Conatct";
import Product from "../Components/Product/Product";
import CategoryDetails from "../Components/Product/CategoryDetails/CategoryDetails";
import LayoutProducts from "../Layout/LayoutProducts";
import Booking from "../Components/Booking/BookingCart";
import BookingPage from "../Components/Booking/BookingPage";
import About from "../Components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Conatct />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutProducts />,
    children: [
      {
        path: "/product/:id",
        element: <CategoryDetails />,
        loader: ({ params }) => {
          const fetchdata = fetch(`http://localhost:5000/giftcategories/${params.id}`);
          return fetchdata;
        },
      },
      {
        path: "/product/booking/:id",
        element: <Booking />,
        loader: ({ params }) => {
          const bookingData = fetch(`http://localhost:5000/giftdetails/${params.id}`);
          return bookingData;
        },
      },
      {
        path: "/bookings",
        element: <BookingPage />,
      },
    ],
  },
]);
