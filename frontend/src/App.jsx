import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/shared/layout";
import Dashboard from "./components/Dashboard";

import Item from "./components/Item";
import ItemAdd from "./components/ItemAdd";

import StockEntry from "./components/StockEntry";
import EntryAdd from "./components/EntryAdd";

import ReportStockLedger from "./components/ReportStockLedger";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/items" element={<Item />} />
            <Route path="/items/add" element={<ItemAdd />} />
            <Route path="/entries" element={<StockEntry />} />
            <Route path="/entries/add" element={<EntryAdd />} />
            <Route path="/reports" element={<ReportStockLedger />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
