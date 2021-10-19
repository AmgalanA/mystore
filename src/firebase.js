import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMM45qxTf_Jf8BJBj4c0OfYxB_vFCidl0",
  authDomain: "freid-db.firebaseapp.com",
  projectId: "freid-db",
  storageBucket: "freid-db.appspot.com",
  messagingSenderId: "658317672477",
  appId: "1:658317672477:web:0b9faa7efc12c78f7dc6f4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };