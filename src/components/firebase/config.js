// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAqFatqeSJReoJi9xbRrpIAdViAE26q2Qw",

  authDomain: "otaku-store-790a1.firebaseapp.com",

  projectId: "otaku-store-790a1",

  storageBucket: "otaku-store-790a1.appspot.com",

  messagingSenderId: "125147997933",

  appId: "1:125147997933:web:14bc4c745ee2b1ad4e4ee4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);