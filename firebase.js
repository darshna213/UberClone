import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpo8bUN9V8OnhqAzVtHX4pdxUVuBtr_9Y",
  authDomain: "uber-next-clone-live-9edc3.firebaseapp.com",
  projectId: "uber-next-clone-live-9edc3",
  storageBucket: "uber-next-clone-live-9edc3.appspot.com",
  messagingSenderId: "173656562842",
  appId: "1:173656562842:web:19e31075a10a83464f1323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, auth, provider}