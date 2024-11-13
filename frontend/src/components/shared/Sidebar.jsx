import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FaBox } from "react-icons/fa6";

import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <>
      <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
        <div className="flex items-center gap-2 px-1 py-3">
          <FaBox fontSize={24} color={"#159485"} />
          <span className="text-neutral-100 text-lg">
            Stock Management System
          </span>
        </div>
        <div className="flex-1">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
