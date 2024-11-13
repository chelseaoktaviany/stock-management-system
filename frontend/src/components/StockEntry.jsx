import { Link } from "react-router-dom";
import StockEntryTable from "./StockEntryTable";

const StockEntry = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">
        <p className="font-light">
          Back to <Link to="/">dashboard</Link>
        </p>
      </div>
      <div className="mb-2">
        <Link
          to="/entries/add"
          className="bg-blue-600 hover:bg-blue-700 text-white font-normal py-4 px-4 rounded"
        >
          Add entry
        </Link>
      </div>
      <div className="flex flex-row w-full">
        <StockEntryTable />
      </div>
    </div>
  );
};

export default StockEntry;
