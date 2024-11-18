// React Component to Add Beneficiary
import axios from 'axios';
import { useState } from 'react';

const AddBeneficiaryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    bankName: '',
    accountType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.accountNumber || !formData.bankName || !formData.accountType) {
      alert('All fields are required');
      return;
    }

    axios
      .post('http://localhost:5000/api/beneficiaries', formData) // Correct API URL
      .then((response) => {
        console.log('Beneficiary added:', response.data);
        // Optionally reset form
        setFormData({ name: '', accountNumber: '', bankName: '', accountType: '' });
      })
      .catch((err) => {
        console.error('Error adding beneficiary:', err);
        alert('Error adding beneficiary');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleInputChange}
        placeholder="Account Number"
        required
      />
      <input
        type="text"
        name="bankName"
        value={formData.bankName}
        onChange={handleInputChange}
        placeholder="Bank Name"
        required
      />
      <input
        type="text"
        name="accountType"
        value={formData.accountType}
        onChange={handleInputChange}
        placeholder="Account Type"
        required
      />
      <button type="submit">Add Beneficiary</button>
    </form>
  );
};

export default AddBeneficiaryForm;
