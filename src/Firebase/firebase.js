// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6bZTpcUM7B-f96S6ZHooUqp_ilugz_ns",
  authDomain: "vrooom-d9dcf.firebaseapp.com",
  projectId: "vrooom-d9dcf",
  storageBucket: "vrooom-d9dcf.appspot.com",
  messagingSenderId: "465129121835",
  appId: "1:465129121835:web:1ea7e1f2dc0259efe8a26e",
  measurementId: "G-2T8CP3HDCV"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
