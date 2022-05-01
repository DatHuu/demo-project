import React from "react";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

function DepartmentCreate() {
  const { id } = useParams();
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
            handleSubmit,
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
              <br/>
              {errors.name && touched.name && errors.name}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default DepartmentCreate;
