// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC80923w_Dkk3WpAXsC15iAUM4naTwYB1s",
  authDomain: "fir-auth-2bd4c.firebaseapp.com",
  projectId: "fir-auth-2bd4c",
  storageBucket: "fir-auth-2bd4c.appspot.com",
  messagingSenderId: "402299764020",
  appId: "1:402299764020:web:0e04444a54cd2a7cfbb961"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app = firebase.app()
}

const auth = firebase.auth()

const db = getFirestore();

export { auth, db };