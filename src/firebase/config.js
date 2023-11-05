// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOla2wf8OnNRMoFsxRsIExbYbgci1Civ0",
  authDomain: "campus-complaints.firebaseapp.com",
  projectId: "campus-complaints",
  storageBucket: "campus-complaints.appspot.com",
  messagingSenderId: "330114267722",
  appId: "1:330114267722:web:fdd468a2a045a1bac904b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);