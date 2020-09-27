import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBbHeMLRtLuUKtnvw4IvWo6pSUaMB3Lvy8",
    authDomain: "tyson-e1f7a.firebaseapp.com",
    databaseURL: "https://tyson-e1f7a.firebaseio.com",
    projectId: "tyson-e1f7a",
    storageBucket: "tyson-e1f7a.appspot.com",
    messagingSenderId: "1082183820711",
    appId: "1:1082183820711:web:39d59e7212e9efeda2c282",
    measurementId: "G-H3P768JCXB"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;