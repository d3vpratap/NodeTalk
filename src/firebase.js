import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-_n7SPuGIfjlinF0V8rMnKXnv67BA76M",
    authDomain: "nodetalk-24565.firebaseapp.com",
    projectId: "nodetalk-24565",
    storageBucket: "nodetalk-24565.firebasestorage.app",
    messagingSenderId: "400411214340",
    appId: "1:400411214340:web:78f1c53257d55c5014eb51"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
