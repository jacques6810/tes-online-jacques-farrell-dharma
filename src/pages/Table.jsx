import { useEffect, useState } from "react";
import "../App.css";

function Table() {
  const [data, setData] = useState(["table"]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const groupDataByYearMonth = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const date = new Date(item.transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // getMonth() returns 0-11
      const key = `${year}-${month < 10 ? "0" : ""}${month}`;
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(item);
    });
    return groupedData;
  };

  const groupedData = groupDataByYearMonth(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto my-10 p-4 bg-white shadow-md rounded">
        <div className="flex items-center justify-center">
          <h1 className="flex items-center justify-center text-4xl font-bold mt-4 mb-10">
            {" "}
            Transaction Data{" "}
          </h1>
        </div>
        {Object.keys(groupedData).map((key) => (
          <div key={key} className="mb-8">
            <h2 className="flex items-center justify-center text-2xl font-bold mb-4">
              {key}
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {groupedData[key].map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.productID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.productName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.status === 0 ? "SUCCESS" : "FAILED"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.transactionDate).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
