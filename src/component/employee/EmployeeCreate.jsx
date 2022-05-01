import React from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeCreate() {
  const { id } = useParams();
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-6">
        <h1>Employee</h1>
        <Formik
          initialValues={{
            name: "",
            gender: "",
            date: "",
            address: "",
            phone: "",
            email: "",
            departmentName: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name Required!";
            }
            if (!values.gender) {
              errors.gender = "Gender Required";
            }
            if (!values.date) {
              errors.date = "Date Required";
            }
            if (!values.address) {
              errors.address = "Address Required";
            }
            if (!values.phone) {
              errors.phone = "Phone Required";
            } else if (!/^$|[0-9]{10}$/i.test(values.phone)) {
              errors.phone = "Invalid phone number";
            }
            if (!values.email) {
              errors.email = "Email Required";
            } else if (
              !/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/i.test(
                values.email
              )
            ) {
              errors.email = "\nInvalid email address";
            }
            if (!values.departmentName) {
                errors.departmentName = "Choose Department Name Required"
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
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-4 pb-2">
                  <label className="form-label">Emplouee Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                  >
                    <option hidden value="-1">
                      Choose your gender
                    </option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <label className="form-label">Date Of Birth</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4 pb-2">
                  <label className="form-label">Department Name</label>
                  <select
                    name="departmentName"
                    id="departmentName"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.departmentName}
                  >
                    <option hidden value="-1">
                      Choose your Dept
                    </option>
                    <option value="0">Dept1</option>
                    <option value="1">Dept2</option>
                    <option value="2">Dept3</option>
                  </select>
                </div>
                <div className="col-md-12 mb-4 pb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary col-md-3 mb-4 pb-2"
              >
                {id === "0" ? "Save" : "Update"}
              </button>
              <br />
              {errors.name && touched.name && errors.name}
              <br />
              {errors.gender && touched.gender && errors.gender}
              <br />
              {errors.date && touched.date && errors.date}
              <br />
              {errors.address && touched.address && errors.address}
              <br />
              {errors.phone && touched.phone && errors.phone}
              <br />
              {errors.email && touched.email && errors.email}
              <br/>
              {errors.departmentName && touched.departmentName && errors.departmentName}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EmployeeCreate;
