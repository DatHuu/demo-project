import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import {
  createDepartment,
  getDepartment,
  updateDepartment,
} from "../api/DeptEmpManageService";

export default function DepartmentCreate() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [department, setDepartment] = useState({
    id: id,
    departmentName: "",
  });

  useEffect(() => {
    if (id === "0") return;

    const fetchAPI = async () => {
      const department = await getDepartment(id);
      setDepartment(department);
    };
    fetchAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const handle = async () => {
      id === "0"
        ? await createDepartment(department)
        : await updateDepartment(id, department);
      navigate(`/departments`);
    };
    handle();

    return (
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <h1>Derpartment</h1>
          <Formik
            initialValues={{ name: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Department Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {id === "0" ? "Save" : "Update"}
                </button>
                <br />
                {errors.name && touched.name && errors.name}
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  };
}
