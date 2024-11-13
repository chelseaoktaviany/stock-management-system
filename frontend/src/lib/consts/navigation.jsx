import {
  HiOutlineViewGrid,
  HiCube,
  HiDocumentText,
  HiDocumentReport,
} from "react-icons/hi";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "items",
    label: "Item",
    path: "/items",
    icon: <HiCube />,
  },
  {
    key: "entries",
    label: "Stock Entry",
    path: "/entries",
    icon: <HiDocumentText />,
  },
  {
    key: "reports",
    label: "Report Stock Ledger",
    path: "/reports",
    icon: <HiDocumentReport />,
  },
];
