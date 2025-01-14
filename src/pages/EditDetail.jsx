import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <p>No data to edit. Please go back and select an item.</p>;
  }

  const [formData, setFormData] = React.useState({
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving data (e.g., sending a PUT request to the backend)
    console.log("Data saved:", formData);
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Edit Transaction
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productID" className="block text-gray-700">
              Product ID
            </label>
            <input
              type="text"
              id="productID"
              name="productID"
              value={formData.productID}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
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
            <label htmlFor="transactionDate" className="block text-gray-700">
              Transaction Date
            </label>
            <input
              type="datetime-local"
              id="transactionDate"
              name="transactionDate"
              value={new Date(formData.transactionDate)
                .toISOString()
                .slice(0, -1)}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDetail;
