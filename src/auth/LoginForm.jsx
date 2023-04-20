import React from "react";
import { useFormik } from "formik";

import { useAuthState } from "react-firebase-hooks/auth";
// import firebase from "../firebase";
// import "firebase/auth";

function LoginForm({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "james@bond.com",
      password: "123456",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      onLogin(values);
      // toast.success('Login success');
    },
  });

  // function handleRegister() {
  //   console.log("pakartokite slaptažodį");
  //   return;
  //   // <button onClick={handlePassword} type="submit"></button>
  // }

  function handleLogin() {
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
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
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
      <button type="submit">
        Submit
      </button>
      {/* <button onClick={handleRegister} type="submit">
        Registruotis
      </button> */}
    </form>
  );
}

export default LoginForm;
