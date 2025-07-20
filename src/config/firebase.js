// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX40R7ltDG2FHeI7-ie10QNTV3a9sglgo",
  authDomain: "algorithmx-agency.firebaseapp.com",
  projectId: "algorithmx-agency",
  storageBucket: "algorithmx-agency.firebasestorage.app",
  messagingSenderId: "1047323113717",
  appId: "1:1047323113717:web:300b19147260a78049edbc",
  measurementId: "G-FMRCQC0NT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
export default app;
