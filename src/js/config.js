
import firebase from 'firebase/app'; // solo cargo firebase para levantar la aplicacion

const config = {
    apiKey: "AIzaSyAptfSkVxz-pm-pTxdbt2OcEspLnK15RuQ",
    authDomain: "edfirebase-18392.firebaseapp.com",
    databaseURL: "https://edfirebase-18392.firebaseio.com",
    projectId: "edfirebase-18392",
    storageBucket: "edfirebase-18392.appspot.com",
    messagingSenderId: "279335133675"
}

const init = () => firebase.initializeApp(config)

init()