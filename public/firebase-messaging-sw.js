importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');


  firebase.initializeApp({
    apiKey: "AIzaSyBkibsKOn-sfdzfUOkNx5qNsPtxdOnC96U",
    authDomain: "quizz-pwa-app.firebaseapp.com",
    projectId: "quizz-pwa-app",
    storageBucket: "quizz-pwa-app.appspot.com",
    messagingSenderId: "414104402544",
    appId: "1:414104402544:web:22920b465dd53763bf12b5",
    measurementId: "G-0N1QYSWRFS"
  });
  firebase.messaging();