import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Song
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Artist
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Malcolm Lockyer</td>
            <td className="px-6 py-4 whitespace-nowrap">1961</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Witchy Woman</td>
            <td className="px-6 py-4 whitespace-nowrap">The Eagles</td>
            <td className="px-6 py-4 whitespace-nowrap">1972</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Shining Star</td>
            <td className="px-6 py-4 whitespace-nowrap">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-4 whitespace-nowrap">1975</td>
          </tr>
        </tbody>
      </table>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
    </div>
  );
}

export default App;
