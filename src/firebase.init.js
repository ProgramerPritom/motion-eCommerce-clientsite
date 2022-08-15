// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBlK2BnTYsC9THvlAOpm_Ks1vZSO8IzBI",
  authDomain: "motion-view-demosite.firebaseapp.com",
  projectId: "motion-view-demosite",
  storageBucket: "motion-view-demosite.appspot.com",
  messagingSenderId: "607827450710",
  appId: "1:607827450710:web:7f53cbf1ddc93340c994f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
