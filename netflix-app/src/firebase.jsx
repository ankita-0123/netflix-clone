// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlaWHlQ3l0Vl9O48MJaBlp7fzXFC_8RFE",
  authDomain: "netflix-ddcaf.firebaseapp.com",
  projectId: "netflix-ddcaf",
  storageBucket: "netflix-ddcaf.appspot.com",
  messagingSenderId: "656988245068",
  appId: "1:656988245068:web:e81eebdff522718f5938e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)