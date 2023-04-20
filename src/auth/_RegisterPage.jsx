// import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-hot-toast";
import LoginForm from "./LoginForm";
import { auth } from "../firebase";
import { useAuthCtx } from "../AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function RegisterPage() {
  const { login } = useAuthCtx();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function loginWithHooks({ email, password }) {
    console.log("ivyko login----------------");
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
      <h1>Register here:</h1>
      <p>Hello!</p>
      {error && <h3>Ivyko klaida</h3>}
      {loading && <h2>Loading...</h2>}
      {user && <h2>You are logged in as {user.user.email} </h2>}
      {!user && <LoginForm onLogin={loginWithHooks} />}
    </div>
  );
}

export default RegisterPage;
