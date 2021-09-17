import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB4gFFpw7WQQvUpA6fhH7sY2MEYD_YyOYI",
    authDomain: "contact-app-19c0c.firebaseapp.com",
    projectId: "contact-app-19c0c",
    storageBucket: "contact-app-19c0c.appspot.com",
    messagingSenderId: "949692408556",
    appId: "1:949692408556:web:7af65fb3f78d13d65afbc9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase