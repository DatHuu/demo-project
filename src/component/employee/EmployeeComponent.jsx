import React from 'react'
import { useNavigate } from "react-router-dom";

function EmployeeComponent() {

  let navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/employee/${id}`);
  };
  return (
    <div>
      <h1 style={{ color: "black" }}>Employe Manage</h1>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DateOfBirth</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>
                <button
                  style={{ marginRight: "10px" }}
                  className="btn btn-success"
                  onClick={() => handleUpdate()}
                >
                  Update
                </button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/employee/0`);
          }}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

export default EmployeeComponent