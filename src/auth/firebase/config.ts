import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseAuthApp = firebase.initializeApp({
    apiKey: "AIzaSyAUwiVt43KJidwfv6Ivr42oMgrRWvjAdes",
    authDomain: "vicar-user.firebaseapp.com",
    projectId: "vicar-user",
    storageBucket: "vicar-user.appspot.com",
    messagingSenderId: "362143403417",
    appId: "1:362143403417:web:1f3426b56db256ca52d708",
    databaseURL: "https://vicar-user-default-rtdb.firebaseio.com/"
});
