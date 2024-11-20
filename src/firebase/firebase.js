// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ofM5rtV-HIhtI8vYTSHQ2TxZJRRbDAQ",
  authDomain: "tercercorte-22d61.firebaseapp.com",
  projectId: "tercercorte-22d61",
  storageBucket: "tercercorte-22d61.firebasestorage.app",
  messagingSenderId: "339050123317",
  appId: "1:339050123317:web:3804654521567bdd7c617c",
  measurementId: "G-9958B0HB5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
