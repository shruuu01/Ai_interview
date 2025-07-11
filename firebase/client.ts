
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq8tL2wWYEGzBLu3DvIQohOYlTTGBB1pQ",
  authDomain: "prepwise-7e9e9.firebaseapp.com",
  projectId: "prepwise-7e9e9",
  storageBucket: "prepwise-7e9e9.firebasestorage.app",
  messagingSenderId: "501580976313",
  appId: "1:501580976313:web:039691f379eebde44a8b68",
  measurementId: "G-CX5N8PVRSW"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);