import DashboardGrid from "./DashboardGrid";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-row w-full">
        <h2 className="font-bold text-xl my-2">
          Welcome to Stock Management System!
        </h2>
      </div>
      <div className="flex flex-row w-full">
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Dashboard;
