const firebaseConfig = {
    apiKey: "AIzaSyCuYkUSJHRZUCA5737B6Eiq1XXadbEBiQ4",
    authDomain: "teckcode-82ced.firebaseapp.com",
    projectId: "teckcode-82ced",
    storageBucket: "teckcode-82ced.appspot.com",
    messagingSenderId: "217869452559",
    appId: "1:217869452559:web:cc76ed9368da1efa2caa7a",
    measurementId: "G-VH1W9RFDE0"
  };


firebase.initializeApp(firebaseConfig);

const dab = firebase.firestore();

  console.log("hello",firebase);