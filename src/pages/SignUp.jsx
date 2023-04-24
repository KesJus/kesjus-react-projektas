import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../auth/firebase";
import { useAuthCtx } from "../auth/AuthProvider";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

firebase.initializeApp({
apiKey="AIzaSyDhigaAzNOb_g7I1MIPgHvnLwIj4EsbpUY",
authDomain="feu5-firebase-kes.firebaseapp.com",
projectId="feu5-firebase-kes",
storageBucket="feu5-firebase-kes.appspot.com",
messagingSenderId="1023525154129",
appId="1:1023525154129:web:cf9a514b0ef8378698b770",
});

const auth = firebase.auth();

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && <p>Registered as: {user.email}</p>}
    </div>
  );
}
export default SignUp