import { useState, useEffect } from "react";

import api from "../../api";

const StockEntryTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await api
      .get("/api/details")
      .then((res) => {
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
      <strong className="text-gray-700 font-medium">List Stock Entries</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>Entry Detail ID</td>
              <td>Entry ID</td>
              <td>Item Code</td>
              <td>Batch ID</td>
              <td>Expiry Date</td>
              <td>Qty</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.entry_detail_id}>
                <td>{item.entry_detail_id}</td>
                <td>{item.entry_id}</td>
                <td>{item.item_code}</td>
                <td>{item.batch_id}</td>
                <td>{item.expiry_date}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockEntryTable;
