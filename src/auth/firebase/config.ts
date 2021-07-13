// import * as firebaseAdmin from "firebase-admin";
import firebase from "firebase/app";
import "firebase/auth";

import serviceConfig from "./firebase.config.json";

export const FIREBASE_STRATEGY_NAME = 'firebase-authentication'
export const AUTHENTICATION_STRATEGY_NAME = 'authentication'
// export const firebaseAdminApp = firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert(firebaseServiceAccountConfig),
// });

export const firebaseServiceAccountConfig = serviceConfig;
export const firebaseAuthApp = firebase.initializeApp({
    apiKey: "AIzaSyAUwiVt43KJidwfv6Ivr42oMgrRWvjAdes",
    authDomain: "vicar-user.firebaseapp.com",
    projectId: "vicar-user",
    storageBucket: "vicar-user.appspot.com",
    messagingSenderId: "362143403417",
    appId: "1:362143403417:web:1f3426b56db256ca52d708"
});



