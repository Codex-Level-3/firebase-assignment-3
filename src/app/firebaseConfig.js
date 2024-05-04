// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcFdgWkATYtId5qYbvGV0-iDOeF5VEngg",
  authDomain: "firestore-database-c9f29.firebaseapp.com",
  projectId: "firestore-database-c9f29",
  storageBucket: "firestore-database-c9f29.appspot.com",
  messagingSenderId: "564342473265",
  appId: "1:564342473265:web:ac4e3a22578968199bcb10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
