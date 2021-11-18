import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGp1TwCXAAFXOOvv-S2PQgTPMHULgcts",
  authDomain: "instagram-dark-3b157.firebaseapp.com",
  projectId: "instagram-dark-3b157",
  storageBucket: "instagram-dark-3b157.appspot.com",
  messagingSenderId: "223282117334",
  appId: "1:223282117334:web:5d6a9d38e6fe59f282a777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};