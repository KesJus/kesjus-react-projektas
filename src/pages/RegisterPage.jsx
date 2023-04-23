// import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-hot-toast";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Main from "./Main";
import RegisterForm from "../auth/RegisterForm";

function RegisterPage() {
  const { login } = useAuthCtx();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function registerWithHooks({ email, password }) {

    const rez = signInWithEmailAndPassword(email, password).then(() => {
      toast.success("Register success");
    });
    console.log('rez ===', rez);
    debugger
    toast.promise(rez, {
      loading: 'Loading',
      success: 'Login success',
      error: 'Error when registering',
    });
  }

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
