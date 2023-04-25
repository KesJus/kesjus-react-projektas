import { useSignOut } from "react-firebase-hooks/auth";
import { useAuthCtx } from "../auth/AuthProvider";
import { auth } from "../auth/firebase";

function Logout() {
  const { isLoggedIn } = useAuthCtx();
  const [signOut, loading, error] = useSignOut(auth);

  function logoutFire() {
    signOut();
  }

  return !isLoggedIn ? null : (
    <button className="btn btn-outline-info logout" onClick={logoutFire}>
      Logout
    </button>
  );
}

export default Logout;
