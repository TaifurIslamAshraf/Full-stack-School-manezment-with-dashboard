import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Admission from "../pages/Admission";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
      </Route>
    </Routes>
  );
};

export default Router;
