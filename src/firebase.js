import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAce6g4nBQKGLQzJgsQlbdNauVRH2U0DtA",
    authDomain: "cart-b54f3.firebaseapp.com",
    projectId: "cart-b54f3",
    storageBucket: "cart-b54f3.appspot.com",
    messagingSenderId: "869247651062",
    appId: "1:869247651062:web:c1d49d6040a1fa1454b0d7"
  };

export const app = initializeApp(firebaseConfig);
export const db=getFirestore();