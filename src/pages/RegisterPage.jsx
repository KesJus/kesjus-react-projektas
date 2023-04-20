// import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-hot-toast";
import LoginForm from "../auth/LoginForm";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function RegisterPage() {
  const { login } = useAuthCtx();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function loginWithHooks({ email, password }) {
    console.log("login success!! ----------------");
    const rez = signInWithEmailAndPassword(email, password).then(() => {
      toast.success("Login success");
    });
    // console.log('rez ===', rez);
    // toast.promise(rez, {
    //   loading: 'Loading',
    //   success: 'Login success',
    //   error: 'Error when loging in',
    // });
  }

  console.log("user ===", user);
  return (
    <div className="container">
      <h1>Register Page</h1>
      <p>enter, please your</p>
      {error && <h3>Ivyko klaida</h3>}
      {loading && <h2>Loading...</h2>}
      {user && <h2>You are logged in as {user.user.email} </h2>}
      {!user && <LoginForm onLogin={loginWithHooks} />}
    </div>
  );
}

export default RegisterPage;
