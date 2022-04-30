import React from "react";
import './HomeComponent.css'

function HomeComponent() {
  return (
    <div>
      <h1 style={{ color: "red" }}>List todos</h1>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>{todo.done.toString()}</td>
                <td>
                  <button
                    style={{ marginRight: "10px" }}
                    className="btn btn-success"
                    onClick={() => handleUpdate(todo.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(todo.id)}
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
            navigate(`/todos/0`);
          }}
        >
          Create New
        </button>
      </div>
    </div>
  );
}

export default HomeComponent;
