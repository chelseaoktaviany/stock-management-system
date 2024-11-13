import { useState, useEffect } from "react";

import api from "../../api";

const ItemTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await api
      .get("/api/items")
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
      <strong className="text-gray-700 font-medium">List Items</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>Item Code</td>
              <td>Item Name</td>
              <td>UOM</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.item_code}>
                <td>{item.item_code}</td>
                <td>{item.name}</td>
                <td>{item.uom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
