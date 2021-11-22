import config from "./config";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:config.REACT_APP_FIREBASE_APIKEY,                               
  authDomain:'instagram-dark-3b157.firebaseapp.com',                                
  projectId:'instagram-dark-3b157',                              
  storageBucket:'instagram-dark-3b157.appspot.com',                         
  messagingSenderId:config.REACT_APP_FIREBASE_MESSAGINGSENDERID,                             
  appId:config.REACT_APP_FIREBASE_APPID                                
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};