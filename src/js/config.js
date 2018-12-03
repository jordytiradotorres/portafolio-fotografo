
import firebase from 'firebase/app'; // solo cargo firebase para levantar la aplicacion

const config = {
    apiKey: "AIzaSyAaP7Nsiw7QAb_MGliK2Abh2mhSXbLUcEw",
    authDomain: "webfotografo-fb614.firebaseapp.com",
    databaseURL: "https://webfotografo-fb614.firebaseio.com",
    projectId: "webfotografo-fb614",
    storageBucket: "webfotografo-fb614.appspot.com",
    messagingSenderId: "277230184797"
}

const init = () => firebase.initializeApp(config)

init()