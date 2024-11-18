import React, { useState } from "react";

const ManageBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    bankName: "",
    accountType: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.accountNumber || !formData.bankName || !formData.accountType) {
      alert("All fields are required");
      return;
    }

    if (editingId !== null) {
      // Update existing beneficiary
      setBeneficiaries((prev) =>
        prev.map((beneficiary) =>
          beneficiary.id === editingId ? { ...beneficiary, ...formData } : beneficiary
        )
      );
      setEditingId(null); // Reset editing state
    } else {
      // Add new beneficiary
      const newBeneficiary = { ...formData, id: Date.now() }; // Generate unique ID
      setBeneficiaries([...beneficiaries, newBeneficiary]);
    }

    // Clear form
    setFormData({
      name: "",
      accountNumber: "",
      bankName: "",
      accountType: "",
    });
  };

  const handleEdit = (id) => {
    const beneficiaryToEdit = beneficiaries.find((beneficiary) => beneficiary.id === id);
    setFormData({
      name: beneficiaryToEdit.name,
      accountNumber: beneficiaryToEdit.accountNumber,
      bankName: beneficiaryToEdit.bankName,
      accountType: beneficiaryToEdit.accountType,
    });
    setEditingId(id); // Set editing ID
  };

  const handleDelete = (id) => {
    setBeneficiaries(beneficiaries.filter((beneficiary) => beneficiary.id !== id));
  };

  return (
    <div>
      <h1 className="text-center text-2xl mb-4">
        {editingId !== null ? "Edit Beneficiary" : "Add Beneficiary"}
      </h1>

      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Beneficiary Name"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
          placeholder="Account Number"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
          placeholder="Bank Name"
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="accountType"
          value={formData.accountType}
          onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
          placeholder="Account Type"
          className="border p-2 mb-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId !== null ? "Update Beneficiary" : "Add Beneficiary"}
        </button>
      </form>

      <h2 className="text-xl mb-2">Existing Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary) => (
          <li key={beneficiary.id} className="mb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3>{beneficiary.name}</h3>
                <p>Account Number: {beneficiary.accountNumber}</p>
                <p>Bank Name: {beneficiary.bankName}</p>
                <p>Account Type: {beneficiary.accountType}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(beneficiary.id)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(beneficiary.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBeneficiaries;
