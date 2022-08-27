import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfSWIU7MRLbFavpCrfBZw3CN_cgXcAgU8",
  authDomain: "house-market-place-f6a33.firebaseapp.com",
  projectId: "house-market-place-f6a33",
  storageBucket: "house-market-place-f6a33.appspot.com",
  messagingSenderId: "475454074362",
  appId: "1:475454074362:web:a2d0e314f6164f3f8c0843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();