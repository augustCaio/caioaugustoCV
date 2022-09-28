  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUFdAlKsXaMStKwCe9OsYyOFHwezeFQ8Y",
    authDomain: "caioadevcaio.firebaseapp.com",
    projectId: "caioadevcaio",
    storageBucket: "caioadevcaio.appspot.com",
    messagingSenderId: "1024432784283",
    appId: "1:1024432784283:web:cd5c5b4d2ad5862827173e",
    measurementId: "G-C0P0TWRH0E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
