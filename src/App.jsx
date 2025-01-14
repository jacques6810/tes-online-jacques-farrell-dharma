import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./pages/Table.jsx";
import AddData from "./pages/AddData.jsx";
import EditData from "./pages/EditData.jsx";
import EditDetail from "./pages/EditDetail.jsx";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto p-4 bg-white shadow-md rounded text-center">
                <h1 className="text-5xl font-bold mb-4">
                  Tes Online - PT Inovasi Daya Solusi
                </h1>
                <p className="text-gray-700">
                  Created by Jacques Farrell Dharma
                </p>
                <div className="mt-4 space-x-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => (window.location.href = "/table")}
                  >
                    View Tables
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    onClick={() => (window.location.href = "/add-data")}
                  >
                    Add Data
                  </button>
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                    onClick={() => (window.location.href = "/edit-data")}
                  >
                    Edit Data
                  </button>
                </div>
              </div>
            }
          />
          <Route path="/table" element={<Table />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/edit-data" element={<EditData />} />
          <Route path="/edit-detail" element={<EditDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
