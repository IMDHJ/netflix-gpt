// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5TgDTAauzUThuHtVh78PCT5aVNv-rOOc",
  authDomain: "netflix-gpt-2d9bd.firebaseapp.com",
  projectId: "netflix-gpt-2d9bd",
  storageBucket: "netflix-gpt-2d9bd.firebasestorage.app",
  messagingSenderId: "982236677421",
  appId: "1:982236677421:web:3731ad35ce3fe3a5e0ffa4",
  measurementId: "G-F0BCES1W1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();