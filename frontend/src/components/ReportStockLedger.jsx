import { Link } from "react-router-dom";
import ReportTable from "./ReportTable";

const ReportStockLedger = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">
        <p className="font-light">
          Back to <Link to="/">dashboard</Link>
        </p>
      </div>
      <div className="flex flex-row w-full">
        <ReportTable />
      </div>
    </div>
  );
};

export default ReportStockLedger;
