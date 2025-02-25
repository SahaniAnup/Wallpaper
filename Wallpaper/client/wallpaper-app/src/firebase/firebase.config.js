// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzmTrV-i738t-1Q_1iuUzERke-OTLUSyc",
  authDomain: "bookstore-31fee.firebaseapp.com",
  projectId: "bookstore-31fee",
  storageBucket: "bookstore-31fee.appspot.com",
  messagingSenderId: "334032357666",
  appId: "1:334032357666:web:3738abb742ef24ded33d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app