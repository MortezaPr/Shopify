import { Routes, Route } from "react-router-dom";
import Admin from "./container/Admin";
import Home from "./container/Home";
import Login from "./components/admin/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
