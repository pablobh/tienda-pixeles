import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLx_puncQb3iX79GMpQmwdQdXbLGr6UVM",
    authDomain: "tienda-pixeles.firebaseapp.com",
    projectId: "tienda-pixeles",
    storageBucket: "tienda-pixeles.appspot.com",
    messagingSenderId: "494574819705",
    appId: "1:494574819705:web:6989ade4da0e37575037a8"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}