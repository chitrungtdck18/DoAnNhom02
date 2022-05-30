
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { getDatabase, ref, push } from "firebase/database"
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
initializeApp(config);
const database = getDatabase()
const storage = getStorage();
const auth = getAuth()
const Adminid = "KIX43luQnZRTd8Mc5GtvJPcBkzd2"
export { auth, database, storage, Adminid }



