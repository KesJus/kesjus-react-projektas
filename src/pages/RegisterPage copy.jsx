// import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-hot-toast";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Main from "./Main";
import RegisterForm from "../auth/RegisterForm";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
// import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const { login } = useAuthCtx();
console.log('login',login,auth)
  // const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  console.log('email ===', email);
  const [createUserWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createUserWithEmailAndPassword(email, password);
//   };
// console.log('handleSubmit ===', handleSubmit);



const registerWithHooks = async ({ email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // Pridėti vartotoją į Users kolekciją
    const userRef = doc(collection(db, "users"), user.uid);
    await setDoc(userRef, {
      email: user.email,
      displayName: "", // Čia galite įrašyti vartotojo vardą
      phoneNumber: "", // Čia galite įrašyti vartotojo telefono numerį
    });

    // ...
console.log('user.emai:',email)
  } catch (error) {
console.log('klaida pridedant user')
    // ...
  }
};

  console.log("user ===", user);
  
  return (
    <div className="container">
      <Main /><div className="head">
      <h2>. . .</h2>
      <p>Don't have an account yet?</p></div>
      {error && <h3>not suitable, try again,</h3>}
      {loading && <h2>Loading...</h2>}
      {user && <h4>You are logged in as {user.user.email} </h4>}
      {!user && <RegisterForm onLogin={registerWithHooks} />}
    </div>
  );
}

export default RegisterPage;
