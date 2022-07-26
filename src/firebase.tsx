// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Di7i2jL3lRm3Oo7F75hsg3Jwx75C9DY",
  authDomain: "ig-clone-2e0de.firebaseapp.com",
  projectId: "ig-clone-2e0de",
  storageBucket: "ig-clone-2e0de.appspot.com",
  messagingSenderId: "1056540737422",
  appId: "1:1056540737422:web:d90b738e37f053e37baedf",
  measurementId: "G-L9PVEJE6T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {
  app,
  auth,
  // analytics,
}