import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import BankCustomers from "./pages/bankCustomers";
import ManageBeneficiaries from "./components/ManageBeneficiaries";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/bank-customer" element={<BankCustomers />} />
      <Route path="/manage-beneficiaries" element={<ManageBeneficiaries />} />
      <Route path="/manage-beneficiaries/edit/:id" element={<ManageBeneficiaries />} />
    </Routes>
  );
};

export default App;
