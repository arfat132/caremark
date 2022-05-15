import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDciqoXdWGY6t0MH21u7M5GTztuDA2GHk8",
  authDomain: "caremark-auth.firebaseapp.com",
  projectId: "caremark-auth",
  storageBucket: "caremark-auth.appspot.com",
  messagingSenderId: "996091791740",
  appId: "1:996091791740:web:7ff4920b84f7cc2937bcf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;