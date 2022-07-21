
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "@firebase/firestore"
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBN2TQdeDW4AH-aHAvEt66gOxTKr8B7vKk",
    authDomain: "e-comm-6609c.firebaseapp.com",
    projectId: "e-comm-6609c",
    storageBucket: "e-comm-6609c.appspot.com",
    messagingSenderId: "483043512560",
    appId: "1:483043512560:web:0c9b27d52f3dcd2ca2b235"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app)