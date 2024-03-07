import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {

 your apikey //apiKey: "",

  authDomain: "uber-clone-ddb16.firebaseapp.com",

  projectId: "uber-clone-ddb16",

  storageBucket: "uber-clone-ddb16.appspot.com",

  messagingSenderId: "1062829683379",

 your id //appId: ""

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
