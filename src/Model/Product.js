
import { getDatabase, ref, set, onValue, push } from "firebase/database"

export const Default_Image_Add = "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Default_Image_Add%2Fimg_add.png?alt=media&token=4e1baebf-6672-4348-8ebe-79b2b50c1e67"
export var arrayProduct = []
const database = getDatabase();
export const createProduct = (data) => {
    var db_Product = ref(database, 'products/');
    const newReference = push(db_Product);
    db_Product = ref(database, 'products/'+newReference.key);
    var product = {
        productID: newReference.key,
        Name: data.Name,
        Price: data.Price,
        Type: data.Type,
        Desc: data.Desc,
        PhotoUrl1: data.PhotoUrl1,
        PhotoUrl2: data.PhotoUrl2,
        PhotoUrl3: data.PhotoUrl3,
    };
    set(db_Product, product)
};
export const updateUser = (data, phone) => {
    const db_User = ref(database, 'products/');
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
    const db = getDatabase();
    const Ref = ref(db, 'user/' + id);
    onValue(Ref, (snapshot) => {
        var item = snapshot.val();
        var returnArr = [];
        returnArr = item;
        return returnArr;
    });
}
