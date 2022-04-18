// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQTI9SB-HHCfyw5gaJT5Kh4eJxL4avKNo",
  authDomain: "ema-john-with-authentica-142bb.firebaseapp.com",
  projectId: "ema-john-with-authentica-142bb",
  storageBucket: "ema-john-with-authentica-142bb.appspot.com",
  messagingSenderId: "377895176684",
  appId: "1:377895176684:web:3b492a13d36721dd7b98c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
