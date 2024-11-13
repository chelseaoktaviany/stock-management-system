import { useState, useEffect } from "react";
import { BiSolidArchive, BiNote, BiReceipt } from "react-icons/bi";

import api from "../../api";

const DashboardGrid = () => {
  const [data, setData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [entryData, setEntryData] = useState([]);

  const BoxWrapper = ({ children }) => {
    return (
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        {children}
      </div>
    );
  };

  const fetchDataItems = async () => {
    await api
      .get("/api/items")
      .then((res) => {
        const { data } = res.data;

        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDataBatches = async () => {
    await api
      .get("/api/batchitems")
      .then((res) => {
        const { data } = res.data;

        setBatchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDataEntries = async () => {
    await api
      .get("/api/entries")
      .then((res) => {
        const { data } = res.data;

        setEntryData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataItems();
    fetchDataBatches();
    fetchDataEntries();
  }, []);

  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <BiSolidArchive className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total items</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {data.length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-500">
          <BiNote className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total batch items
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {batchData.length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <BiReceipt className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total entries
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {entryData.length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGrid;
