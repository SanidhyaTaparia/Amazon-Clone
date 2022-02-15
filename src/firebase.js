// import firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/firestore';

// import { initializeApp } from 'firebase/app';
// import {getFireStore} from 'firebase/firestore/index'
// import 'firebase/auth';
// import 'firebase/database';

import { auth } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCJdGDzxRIgR1Qc5tNnTOsj9fsK1h0edg",
    authDomain: "amaon-challenge-5d9df.firebaseapp.com",
    projectId: "amaon-challenge-5d9df",
    storageBucket: "amaon-challenge-5d9df.appspot.com",
    messagingSenderId: "191671940311",
    appId: "1:191671940311:web:5ad589cfaf21721ce5ac92",
    measurementId: "G-M5SR7NJ86L"
  };

  // Initialize Firebase
  // const firebaseApp=firebase.initializeApp(firebaseConfig);
  // console.log("app=",firebaseApp);
  // const db=firebaseApp.firestore();
  // const auth=firebase.auth();
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  // const auth=firebase.auth();
  

  export {db,auth};

