// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0QmIBHXxcgqJrti-DHSni-4SyeQ9Vx94",
    authDomain: "ent-reviews.firebaseapp.com",
    databaseURL: "https://ent-reviews-default-rtdb.firebaseio.com",
    projectId: "ent-reviews",
    storageBucket: "ent-reviews.firebasestorage.app",
    messagingSenderId: "365160288596",
    appId: "1:365160288596:web:665d38f1379d53d51c38c1",
    measurementId: "G-V62CEL5M9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
export { database }