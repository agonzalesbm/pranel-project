// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "SECRET_KEY",
  authDomain: "pranel-ee85b.firebaseapp.com",
  projectId: "pranel-ee85b",
  storageBucket: "pranel-ee85b.appspot.com",
  messagingSenderId: "471099366465",
  appId: "1:471099366465:web:079db9e7b47a8f035bfac0",
  measurementId: "G-RCHLG38LDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
