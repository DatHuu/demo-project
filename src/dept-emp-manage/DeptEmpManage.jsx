import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "../component/header/HeaderComponent";
import HomeComponent from "../component/home/HomeComponent";
import EmployeeComponent from "../component/employee/EmployeeComponent";
import DepartmentComponent from "../component/department/DepartmentComponent";
import PageNotFound from "../component/page-not-found/PageNotFound";
import FooterComponent from "../component/footer/FooterComponent";
import './DeptEmpManage.css';

function DeptEmpManage() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="body">
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/employee" element={<EmployeeComponent />} />
          <Route path="/department" element={<DepartmentComponent />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default DeptEmpManage;
