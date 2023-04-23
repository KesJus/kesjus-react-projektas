// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDQwqAxxFaNRGexEmAYacbM9aKE9QQUg_Q",
//   authDomain: "biblioteka-a048b.firebaseapp.com",
//   projectId: "biblioteka-a048b",
//   storageBucket: "biblioteka-a048b.appspot.com",
//   messagingSenderId: "416737975865",
//   appId: "1:416737975865:web:0cebb7b2726ea95e99f7e8",
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
console.log("firebaseConfig  ===", firebaseConfig);
// console.log('onAuthStateChanged ===', onAuthStateChanged);
// Initialize Firebase from .env
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// Initialize Cloud Firestore and get a reference to the service
// https://firebase.google.com/docs/firestore/quickstart#web-version-9
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const googleProvider = new GoogleAuthProvider();
