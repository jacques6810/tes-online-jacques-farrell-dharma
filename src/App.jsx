import React, { useState } from "react";
import Table from "./pages/Table.jsx";
import AddData from "./pages/AddData.jsx";
import EditData from "./pages/EditData.jsx";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {view === "home" && (
        <div className="container mx-auto p-4 bg-white shadow-md rounded text-center">
          <h1 className="text-5xl font-bold mb-4">
            Tes Online - PT Inovasi Daya Solusi
          </h1>
          <p className="text-gray-700">Created by Jacques Farrell Dharma</p>
          <div className="mt-4 space-x-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setView("table")}
            >
              View Tables
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={() => setView("addData")}
            >
              Add Data
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => setView("editData")}
            >
              Edit Data
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
              View Detail Data
            </button>
          </div>
        </div>
      )}
      {view === "table" && <Table />}
      {view === "addData" && <AddData />}
      {view === "editData" && <EditData />}
    </div>
  );
}

export default App;
