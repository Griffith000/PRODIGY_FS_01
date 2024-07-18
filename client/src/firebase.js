// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f1cbd.firebaseapp.com",
  projectId: "mern-auth-f1cbd",
  storageBucket: "mern-auth-f1cbd.appspot.com",
  messagingSenderId: "816126226946",
  appId: "1:816126226946:web:3bd944b30e95dcf3672d1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);