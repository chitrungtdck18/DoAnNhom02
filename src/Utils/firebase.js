import { database, auth } from './firebase-Config';
const userid = auth.currentUser.uid
const db_User = database.ref("user" + "/" + userid)
export const createUser = (data) => {
    var user = {
        userID: userid,
        userName: data.displayName,
        email: data.email,
    };
    db_User.set(user)
};
export const updateUser = (data) => {
    var user = {
        userID: userid,
        userName: data.userName,
        email: data.email,
    };
    db_User.update(user)
}

