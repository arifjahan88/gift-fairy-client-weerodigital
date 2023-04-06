import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "../../Assests/nav-logo.png";

const Navbar = () => {
  const [isFixed, setFixed] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 85) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/" className="rounded-lg m-1">
          Home
        </Link>
        <Link to="/product" className="rounded-lg m-1">
          Product
        </Link>
        <Link className="rounded-lg m-1">Booking</Link>
        <Link className="rounded-lg m-1">About</Link>
        <Link to="/contact" className="rounded-lg m-1">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={
        isFixed
          ? "navbar p-0 justify-around mx-auto backdrop-blur-md fixed z-50 border-b-[1px]"
          : "navbar p-0 py-2 justify-around mx-auto absolute z-50"
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-48" src={navlogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
