import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "../component/header/HeaderComponent";
import HomeComponent from "../component/home/HomeComponent";
import EmployeeComponent from "../component/employee/EmployeeComponent";
import DepartmentComponent from "../component/department/DepartmentComponent";
import PageNotFound from "../component/page-not-found/PageNotFound";
import FooterComponent from "../component/footer/FooterComponent";
import DepartmentCreate from "../component/department/DepartmentCreate";
import './DeptEmpManage.css';
import EmployeeCreate from "../component/employee/EmployeeCreate";
import AboutComponent from "../component/about/AboutComponent";

function DeptEmpManage() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="body">
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/employee" element={<EmployeeComponent />} />
          <Route path="/department" element={<DepartmentComponent />} />
          <Route path="/department/:id" element={<DepartmentCreate />} />
          <Route path="/employee/:id" element={<EmployeeCreate />} />
          <Route path="/about" element={<AboutComponent/>}/>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default DeptEmpManage;
