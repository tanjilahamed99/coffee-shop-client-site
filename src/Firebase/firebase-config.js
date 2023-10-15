// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKSCV1dXlERWuCgWQbTTunJqBwc6wybXc",
    authDomain: "coffee-store-aa440.firebaseapp.com",
    projectId: "coffee-store-aa440",
    storageBucket: "coffee-store-aa440.appspot.com",
    messagingSenderId: "348298081711",
    appId: "1:348298081711:web:97506c425c99ac87c06b5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth