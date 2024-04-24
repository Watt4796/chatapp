
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "chatapp-a48c8.firebaseapp.com",
    projectId: "chatapp-a48c8",
    storageBucket: "chatapp-a48c8.appspot.com",
    messagingSenderId: "228676474355",
    appId: "1:228676474355:web:6a5c307c9bb57443252e86",
    measurementId: "G-YNBGB93R6Q"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export  const db = getFirestore();