import firebase from 'firebase';
require("firebase/firestore");
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var config = {
    apiKey: "AIzaSyACZL184naP6zCJ1eYaYIg1uTNOScbh1TM",
    authDomain: "serendipia-9bbf4.firebaseapp.com",
    projectId: "serendipia-9bbf4",
    storageBucket: "serendipia-9bbf4.appspot.com",
    messagingSenderId: "801268449224",
    appId: "1:801268449224:web:1f7d159c9287a848cb8afd",
    measurementId: "G-1KSJ6WTC9F"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(config);

  const db = firebase.firestore();
  
  export {fb,db}
