import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

function LoginForm({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "james@bond.com",
      password: "123456",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).trim().required(),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      onLogin(values);
      toast.success("Login success");
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
        submit
      </button>
    </form>
  );
}

export default LoginForm;
