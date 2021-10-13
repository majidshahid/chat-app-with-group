import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCymX0-gSlb8o3L3d6yRmCoq4G4CALpQ9A",
    authDomain: "olx-web-64bf5.firebaseapp.com",
    projectId: "olx-web-64bf5",
    storageBucket: "olx-web-64bf5.appspot.com",
    messagingSenderId: "907678715429",
    appId: "1:907678715429:web:4ed3b2fd0b10b56614f9cc",
    measurementId: "G-8HY1L0RCPR"
  };

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};