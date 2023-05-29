// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAE_ur3iB4BqEJnZIjzz-Tjzm8k5WcOXZ0",
    authDomain: "snapshot-a4283.firebaseapp.com",
    projectId: "snapshot-a4283",
    storageBucket: "snapshot-a4283.appspot.com",
    messagingSenderId: "1078326600480",
    appId: "1:1078326600480:web:9ae46dedca54a5c272ed45",
    measurementId: "G-J9E0TWVCBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userCollectionRef = collection(db, "users");