// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqAN3kttLJneKPFZ_loTdMgvzXV7JpaFE",
  authDomain: "food--app-2a2ea.firebaseapp.com",
  projectId: "food--app-2a2ea",
  storageBucket: "food--app-2a2ea.appspot.com",
  messagingSenderId: "615085111941",
  appId: "1:615085111941:web:cbd5ca4d027c9d107587ec",
  measurementId: "G-6GQEK4C9L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();