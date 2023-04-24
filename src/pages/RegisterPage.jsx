// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { toast } from "react-hot-toast";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Main from "./Main";
import RegisterForm from "../auth/RegisterForm";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
// import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Toast } from "react-hot-toast";
// import { useState } from "react";
// import { auth } from "../auth/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import RegisterForm from "../auth/RegisterForm";

function RegisterPage() {
  const [error, setError] = useState("");

  async function onSubmit(email, password) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await addDoc(collection(db, "users"), { email: user.email, uid: user.uid });
    } catch (error) {
      // setError(error.message);
      setError('user was not registered');
      // toast.error("Login error");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      {error && <div className="error">{error}</div>}
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

export default RegisterPage;

