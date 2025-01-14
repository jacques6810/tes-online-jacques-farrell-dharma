import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddData() {
  const [formData, setFormData] = useState({
    productID: "",
    productName: "",
    amount: "",
    customerName: "",
    status: "0",
    transactionDate: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (
      !formData.productID ||
      !formData.productName ||
      !formData.amount ||
      !formData.customerName ||
      !formData.transactionDate
    ) {
      setError("All fields are required.");
      return;
    }

    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data added successfully:", data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/table");
        }, 2000);
      })
      .catch((error) => console.error("Error adding data:", error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto my-10 p-4 bg-white shadow-md rounded">
        <h1 className="text-4xl font-bold mb-4">Add Data</h1>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Data added successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="productID"
              placeholder="Product ID"
              value={formData.productID}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="0">SUCCESS</option>
              <option value="1">FAILED</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="datetime-local"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddData;
