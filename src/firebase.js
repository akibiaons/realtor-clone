// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fireStore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3iaM1wyIKe3Go41fRrFo_u8McIGvUY48",
  authDomain: "real-estate-app-42399.firebaseapp.com",
  projectId: "real-estate-app-42399",
  storageBucket: "real-estate-app-42399.appspot.com",
  messagingSenderId: "1056422129064",
  appId: "1:1056422129064:web:3c102fc1bd38788e05819d",
  measurementId: "G-TCTQ6ZZJQY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
