import { auth } from "../auth/firebase";
import RegisterForm from "../auth/RegisterForm";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";

function RegisterPage() {
  const [error, setError] = useState("");

  async function onSubmit(email, password) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await addDoc(collection(db, "users"), { email: user.email, uid: user.uid });
    } catch (error) {
      // setError(error.message);
      setError("user was not registered");
      // toast.error("Login error");
    }
  }

  return (
    <div>
      <div className="head">
        <h2>. . .</h2>{" "}
      </div>
      <h4>
        <em>Don't have an account yet?</em>
      </h4>
      {error && <div className="error">{error}</div>}
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

export default RegisterPage;
