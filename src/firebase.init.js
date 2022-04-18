// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIfBZn0d_Dl4MfbQ2BNvNKD_bKAzSb9hE",
  authDomain: "ema-john-authentication-57751.firebaseapp.com",
  projectId: "ema-john-authentication-57751",
  storageBucket: "ema-john-authentication-57751.appspot.com",
  messagingSenderId: "258941491265",
  appId: "1:258941491265:web:7ec111d0e842aef770cec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
