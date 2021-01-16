import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBkibsKOn-sfdzfUOkNx5qNsPtxdOnC96U",
    authDomain: "quizz-pwa-app.firebaseapp.com",
    projectId: "quizz-pwa-app",
    storageBucket: "quizz-pwa-app.appspot.com",
    messagingSenderId: "414104402544",
    appId: "1:414104402544:web:22920b465dd53763bf12b5",
    measurementId: "G-0N1QYSWRFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;