// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID,
    
    apiKey:"AIzaSyAT1DWpiFQgf3fhAB1RkkoUF_wFts81bTc",
    authDomain:"assignment-12-26a9a.firebaseapp.com",
    projectId:"assignment-12-26a9a",
    storageBucket:"assignment-12-26a9a.appspot.com",
    messagingSenderId:"84787014531",
    appId:"1:84787014531:web:bfce37c4c32b72997f64b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;