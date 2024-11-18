import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          My App
        </Link>
        <div>
          <Link to="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link to="/buttons" className="mx-2 hover:underline">
            Buttons
          </Link>
          <Link to="/bank-customer" className="mx-2 hover:underline">
            Bank Customer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
