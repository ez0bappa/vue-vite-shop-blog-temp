import { initializeApp } from 'firebase/app'

/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyB9U0RZx7PIlYlhLwspVtLCkZjfakK6OG8",
    authDomain: "vue-vite-shop-blog-temp.firebaseapp.com",
    projectId: "vue-vite-shop-blog-temp",
    storageBucket: "vue-vite-shop-blog-temp.appspot.com",
    messagingSenderId: "53640748036",
    appId: "1:53640748036:web:798385b2bcd47ce5052951",
    measurementId: "G-BLTDLDWSP0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// export const db = firebaseApp.firestore();