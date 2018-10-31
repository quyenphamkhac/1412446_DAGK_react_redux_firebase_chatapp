import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Rebase from 're-base';

const config = {
    apiKey: "AIzaSyB68-QsZrMcVg7bRlvGFQ2E9RR5v_dFESs",
    authDomain: "react-firebase-chatapp.firebaseapp.com",
    databaseURL: "https://react-firebase-chatapp.firebaseio.com",
    projectId: "react-firebase-chatapp",
    storageBucket: "react-firebase-chatapp.appspot.com",
    messagingSenderId: "859490043085"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {
    app,
    base,
    googleProvider
};