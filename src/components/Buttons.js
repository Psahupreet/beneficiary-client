import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  const cardsData = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      country: "USA",
      pincode: "12345",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      country: "India",
      pincode: "56789",
    },
    {
      name: "Alice Johnson",
      email: "alicej@example.com",
      country: "Canada",
      pincode: "11223",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">
            My App
          </Link>
          <div>
            <Link
              to="/"
              className="mx-2 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/bank-customer"
              className="mx-2 hover:underline"
            >
              Bank Customer
            </Link>
          </div>
        </div>
      </nav>

      {/* Cards Section */}
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Country: {user.country}</p>
              <p>Pincode: {user.pincode}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
