import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDepartmentById, getAllDepartments } from "../api/DeptEmpManageService";
import { confirmAlert } from "react-confirm-alert";

function DepartmentComponent() {
  let navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const allDepartments = await getAllDepartments();
    setDepartments(allDepartments);
  };

  const handleUpdate = (id) => {
    navigate(`/departments/${id}`);
  };

  const handleDelete = async (id) => {
     await deleteDepartmentById(id);
     fetchAPI();
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Department Manage</h1>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
              <td>
                <button
                  style={{ marginRight: "10px" }}
                  className="btn btn-success"
                  onClick={() => handleUpdate(department.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDelete(department.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/department/0`);
          }}
        >
          Create New
        </button>
      </div>
    </div>
  );
}

export default DepartmentComponent;
