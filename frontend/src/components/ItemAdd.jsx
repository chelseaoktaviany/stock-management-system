import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../../api";

const ItemAdd = () => {
  const navigate = useNavigate();

  const formInputClass =
    "w-[500px] py-[10px] px-5 bg-transparent rounded-md border border-stroke dark:border-dark-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2";

  const [inputData, setInputData] = useState({
    item_code: "",
    name: "",
    uom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api
      .post("/api/items", inputData)
      .then((res) => {
        console.log(res);
        navigate("/items");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <h1 className="mb-5 text-gray-700 text-xl font-bold">Add item</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-8 flex flex-row gap-8">
          <div className="flex flex-col">
            <label className="mb-[10px] text-base font-normal text-dark">
              Item Code
            </label>
            <input
              type="text"
              className={formInputClass}
              placeholder="Item Code"
              name="item_code"
              value={inputData.item_code}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-[10px] text-base font-normal text-dark">
              Name
            </label>
            <input
              type="text"
              className={formInputClass}
              placeholder="Name"
              name="name"
              value={inputData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-[10px] text-base font-normal text-dark">
              UOM
            </label>
            <input
              type="text"
              className={formInputClass}
              placeholder="UOM"
              name="uom"
              value={inputData.uom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="my-8 flex flex-row py-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-normal py-3 px-6 rounded">
            <p>Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemAdd;
