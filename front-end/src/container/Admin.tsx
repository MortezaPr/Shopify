import Navbar from "../components/admin/Navbar";
import { useLocation } from "react-router-dom";

import AdminHome from "../components/admin/AdminHome";
import Orders from "../components/admin//Orders";
import Products from "../components/admin//Products";
import Inventory from "../components/admin//Inventory";
import Customers from "../components/admin//Customers";
import Staff from "../components/admin//Staff";
import Settings from "../components/admin//Settings";

const Admin = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let componentToRender;

  if (currentPath === "/admin/dashboard") {
    componentToRender = <AdminHome />;
  } else if (currentPath === "/admin/orders") {
    componentToRender = <Orders />;
  } else if (currentPath === "/admin/products") {
    componentToRender = <Products />;
  } else if (currentPath === "/admin/inventory") {
    componentToRender = <Inventory />;
  } else if (currentPath === "/admin/customers") {
    componentToRender = <Customers />;
  } else if (currentPath === "/admin/staff") {
    componentToRender = <Staff />;
  } else if (currentPath === "/admin/settings") {
    componentToRender = <Settings />;
  } else {
    componentToRender = <div>404 Not Found</div>;
  }

  return (
    <div>
      <Navbar />
      {componentToRender}
    </div>
  );
};

export default Admin;
