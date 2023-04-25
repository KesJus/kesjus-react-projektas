import React from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

function RegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: "james@bond.com",
      password: "123456",
    },
    onSubmit: (values) => {
      console.log("Form values for register:", values);
      onSubmit(values);
      toast.success('Register success');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
        className="form-input"
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit" className="sign">
      Register
      </button>
    </form>
  );
}

export default RegisterForm;
