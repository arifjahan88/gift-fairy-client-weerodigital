import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Conatct from "../Components/Contact/Conatct";
import Product from "../Components/Product/Product";

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
    ],
  },
]);
