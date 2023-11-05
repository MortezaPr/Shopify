import Navbar from "../components/admin/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

import AdminHome from "../components/admin/AdminHome";
import Orders from "../components/admin//Orders";
import Products from "../components/admin//Products";
import Customers from "../components/admin//Customers";
import Settings from "../components/admin//Settings";
import { useEffect, ReactElement, useState } from "react";
import Sidebar from "../components/admin/Sidebar";

const Admin = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [toggleSidebar, setToggleSidebar] = useState(false);

  let componentToRender: ReactElement | undefined = undefined;

  if (currentPath === "/admin/dashboard") {
    componentToRender = <AdminHome />;
  } else if (currentPath === "/admin/orders") {
    componentToRender = <Orders />;
  } else if (currentPath === "/admin/products") {
    componentToRender = <Products />;
  } else if (currentPath === "/admin/customers") {
    componentToRender = <Customers />;
  } else if (currentPath === "/admin/settings") {
    componentToRender = <Settings />;
  }

  useEffect(() => {
    if (!componentToRender) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [componentToRender, navigate]);

  return (
    <div className="flex">
      <div className={`hidden md:flex  ${toggleSidebar ? "" : "w-64"}`}>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full">
        <div className="pb-20">
          <Navbar
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
          />
        </div>
        {componentToRender}
      </div>
    </div>
  );
};

export default Admin;
