
import { getDatabase, ref, set, onValue } from "firebase/database"
import { database } from "../Utils/firebase-Config";

export const default_avatar = "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Default_User_Avatar%2FUser_avatar.png?alt=media&token=ea68f4e9-48fd-46b8-bbf8-ca5ebea624c5"
export var arrayUser = []

export const createUser = (data) => {
    const db_User = ref(database, 'user/' + data.uid);
    var user = {
        userID: data.uid,
        userName: data.displayName,
        email: data.email,
        phone: data.phoneNumber,
        urlAvatar: data.photoURL
    };
    set(db_User, user)
};
export const updateUser = (data, phone) => {
    const db_User = ref(database, 'user/' + data.uid);
    var user = {
        userID: data.uid,
        userName: data.displayName,
        email: data.email,
        phone: phone,
        urlAvatar: data.photoURL
    };
    set(db_User, user)
}
export const getUser = async (id) => {
    const Ref = ref(database, 'user/' + id);
    onValue(Ref, (snapshot) => {
        var item = snapshot.val();
        var returnArr = [];
        returnArr = item;
        return returnArr;
    });
}
