// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe5jLOC60hp9j-Q6hzQIkcOaxklpcqvH8",
    authDomain: "learnoglance.firebaseapp.com",
    projectId: "learnoglance",
    storageBucket: "learnoglance.appspot.com",
    messagingSenderId: "260269048299",
    appId: "1:260269048299:web:21058aa5095064f36f59ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;