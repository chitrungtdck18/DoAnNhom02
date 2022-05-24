import * as firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

let config = {
    apiKey: "AIzaSyDqVwaBYHQQQ2uo6jQK17QOG6Zj4cmqbIM",
    authDomain: "clothes-store-21b7f.firebaseapp.com",
    databaseURL: "https://clothes-store-21b7f-default-rtdb.firebaseio.com",
    projectId: "clothes-store-21b7f",
    storageBucket: "clothes-store-21b7f.appspot.com",
    messagingSenderId: "668627707668",
    appId: "1:668627707668:web:6203cd43b7c2bc65e08401",
    measurementId: "G-RBL0Y816GG"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
const auth = app.auth()
const database = app.database()
const storage = app.storage()

export { auth, database, storage }
export default firebase;