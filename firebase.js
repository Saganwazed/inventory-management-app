// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFKd54g0oJxnDhu_eq_JjX5-RwUdw1HzQ",
  authDomain: "smart-pantry-c2df9.firebaseapp.com",
  projectId: "smart-pantry-c2df9",
  storageBucket: "smart-pantry-c2df9.appspot.com",
  messagingSenderId: "743656997930",
  appId: "1:743656997930:web:48086f4f35478f444cef53",
  measurementId: "G-5X0EH271ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };
