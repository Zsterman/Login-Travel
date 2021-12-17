import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2oYOY_MGmYP-ei2_jahY2bu_Tb-0Try8",
  authDomain: "react-authentication-a18d7.firebaseapp.com",
  projectId: "react-authentication-a18d7",
  storageBucket: "react-authentication-a18d7.appspot.com",
  messagingSenderId: "352661964745",
  appId: "1:352661964745:web:12f80db41299e4694fca18",
  measurementId: "G-1ZQFW839Z6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
