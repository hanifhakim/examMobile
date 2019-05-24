import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAKTVTY0Pf0XFaEXcJAd1OqupeGB09Qbsw",
    authDomain: "reactnativehanif.firebaseapp.com",
    databaseURL: "https://reactnativehanif.firebaseio.com",
    projectId: "reactnativehanif",
    storageBucket: "reactnativehanif.appspot.com",
    messagingSenderId: "1094507309622",
    appId: "1:1094507309622:web:a581e5fab4f00a2c"
  };
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);