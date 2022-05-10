import { database, auth } from './firebase-Config';
const userdata = auth.currentUser;
const userid =userdata.uid
const db_User = database.ref("user" + "/" + userid)

export const createUser = (data) => {
    var user = {
        userID: userid,
        userName: data.displayName,
        email: data.email,
        phone: ""
    };
    db_User.set(user)
};
export const updateUser = (data) => {
    var user = {
        userID: userid,
        userName: data.userName,
        email: data.email,
        phone: data.phone
    };
    db_User.update(user)
}
export const readUser = () => {
    console.log(userdata)
 
}

