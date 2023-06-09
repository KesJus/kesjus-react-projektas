// import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-hot-toast";
import LoginForm from "../auth/LoginForm";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Main from "./Main";

function LoginPage() {
  const { login } = useAuthCtx();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function loginWithHooks({ email, password }) {
    const rez = signInWithEmailAndPassword(email, password).then(() => {
      toast.success("Login success");
    });
  }

  return (
    <div className="container">
      <div className="head">
        <h2>. . .</h2>{" "}
      </div>
      <h4>
        <em>Log in to our Shop</em>
      </h4>
      {error && <h3>not suitable, try again, or register</h3>}
      {loading && <h2>Loading...</h2>}
      {user && <h4>You are logged in as {user.user.email} </h4>}
      {!user && <LoginForm onLogin={loginWithHooks} />}
    </div>
  );
}

export default LoginPage;
