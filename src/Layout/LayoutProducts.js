import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const LayoutProducts = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutProducts;
