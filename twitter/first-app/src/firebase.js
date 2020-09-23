import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBjYocRDPEEFB_5rtaNSv-5ptlGe3m-EFo",
    authDomain: "twitter-clone-647c1.firebaseapp.com",
    databaseURL: "https://twitter-clone-647c1.firebaseio.com",
    projectId: "twitter-clone-647c1",
    storageBucket: "twitter-clone-647c1.appspot.com",
    messagingSenderId: "1044225357767",
    appId: "1:1044225357767:web:810b7afb265348e230cbe2",
    measurementId: "G-GTNRT3HD65"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

