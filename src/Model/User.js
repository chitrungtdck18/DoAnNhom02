import { database, auth } from '../Utils/firebase-Config';
const userdata = auth.currentUser;
export const default_avatar="https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Default_User_Avatar%2FUser_avatar.png?alt=media&token=ea68f4e9-48fd-46b8-bbf8-ca5ebea624c5"

export const createUser = (data) => {
    const db_User = database.ref("user" + "/" + data.uid)
    var user = {
        userID: data.uid,
        userName: data.displayName,
        email: data.email,
        phone: data.phoneNumber,
        urlAvatar:data.photoURL
    };
    db_User.set(user)
};
export const updateUser = (data) => {
    const db_User = database.ref("user" + "/" + data.uid)
    var user = {
        userID: data.userID,
        userName: data.userName,
        email: data.email,
        phone: data.phone,
        photoURL:data.urlAvatar
    };
    db_User.update(user)
}
export const readUser = (name) => {
//    database.ref(name).on('value', function (snapshot) {
//         console.log(snapshot.val());
//     });
}
