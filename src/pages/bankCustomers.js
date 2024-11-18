import React from "react";
import { Link } from "react-router-dom";

const BankCustomers = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">Bank Customer Management</h1>
      <Link to="/manage-beneficiaries" className="bg-blue-500 text-white px-4 py-2 rounded">
        Manage Beneficiaries
      </Link>
    </div>
  );
};

export default BankCustomers;
