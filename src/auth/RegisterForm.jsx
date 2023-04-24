import React from "react";
import { useFormik } from "formik";

import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
// import firebase from "../firebase";
// import "firebase/auth";

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

  // function handleRegister() {
  //   console.log("pakartokite slaptažodį");
  //   return;
  //   // <button onClick={handlePassword} type="submit"></button>
  // }

  function handleSubmit() {
    // const auth = firebase.auth();
    // const [user, loading, error] = useAuthState(auth);
    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // if (error) {
    //   return
    console.log("autentifikuojame...");
  }

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
