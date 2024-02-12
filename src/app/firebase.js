// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ0jmQXv9tFxdxg31Az5yhoDmW1mSPMPk",
  authDomain: "fir-auth-55b74.firebaseapp.com",
  projectId: "fir-auth-55b74",
  storageBucket: "fir-auth-55b74.appspot.com",
  messagingSenderId: "782680575745",
  appId: "1:782680575745:web:776f6ca8d405e7c4c5d500"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)