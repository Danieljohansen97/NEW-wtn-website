// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAagwkJ3_p1qEJAywrlklmDKWG1Jy19e6E",
  authDomain: "widaetaekkyeonnorge.firebaseapp.com",
  projectId: "widaetaekkyeonnorge",
  storageBucket: "widaetaekkyeonnorge.appspot.com",
  messagingSenderId: "901251930542",
  appId: "1:901251930542:web:79f4878e619687d70d903f",
  measurementId: "G-8CH1KMM8Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);