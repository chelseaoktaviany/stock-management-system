import { useState, useEffect } from "react";

import api from "../../api";

const ReportTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await api
      .get("/api/ledgers")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Report Stock Ledger</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>Tanggal</td>
              <td>Item Code</td>
              <td>Item Name</td>
              <td>Qty In</td>
              <td>Qty Out</td>
              <td>Current Stock</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.tanggal}</td>
                <td>{item.item_code}</td>
                <td>{item.Item.name}</td>
                <td>{item.qty_in}</td>
                <td>{item.qty_out}</td>
                <td>{item.current_stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
