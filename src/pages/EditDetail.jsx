import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <p>No data to edit. Please go back and select an item.</p>;
  }

  const [formData, setFormData] = useState({
    id: item.id,
    productID: item.productID,
    productName: item.productName,
    amount: item.amount,
    customerName: item.customerName,
    status: item.status,
    transactionDate: item.transactionDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    fetch(`http://localhost:3000/data/${formData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data updated successfully:", data);
        navigate("/edit-data");
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto my-10 p-4 bg-white shadow-md rounded">
        <h1 className="flex items-center justify-center text-2xl font-bold mb-4">
          Edit Detail
        </h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productID"
            >
              Product ID
            </label>
            <input
              type="text"
              name="productID"
              value={formData.productID}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="customerName"
            >
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value={0}>SUCCESS</option>
              <option value={1}>FAILED</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="transactionDate"
            >
              Transaction Date
            </label>
            <input
              type="date"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDetail;
