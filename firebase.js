// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5kJkJPwc10aFhsmZIjlWUDa8WuSZkSkc",
  authDomain: "twitter-clone-3df93.firebaseapp.com",
  projectId: "twitter-clone-3df93",
  storageBucket: "twitter-clone-3df93.appspot.com",
  messagingSenderId: "715856912581",
  appId: "1:715856912581:web:473d3d1039610cd007d0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)