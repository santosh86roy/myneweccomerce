// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTwayf0QAj_P4-qoULCUVrt8T001MXG9E",
  authDomain: "ecommercesite-6fff5.firebaseapp.com",
  projectId: "ecommercesite-6fff5",
  storageBucket: "ecommercesite-6fff5.appspot.com",
  messagingSenderId: "44149713516",
  appId: "1:44149713516:web:af3b6e9d01bde33de14649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
