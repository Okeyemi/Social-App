// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjwGPnAgs_oFTr8FLWLY9LLLXFwwYwVwo",
  authDomain: "okeyemi-social-app.firebaseapp.com",
  projectId: "okeyemi-social-app",
  storageBucket: "okeyemi-social-app.appspot.com",
  messagingSenderId: "611084913736",
  appId: "1:611084913736:web:b0d6f5f8406b5a8a40dc7d",
  measurementId: "G-Z386Z7QFQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();