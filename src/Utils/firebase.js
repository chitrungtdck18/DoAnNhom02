import database from '@react-native-firebase/database';
import firebase from './firebase-Config'

export const createUser = ( data) => {
    const db = firebase.database().ref("user" + "/" + data.uid)
    var user = {
        userID: data.uid,
        userName: data.displayName,
        email: data.email,
    };
    db.set(user)
};

