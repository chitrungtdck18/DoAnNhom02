
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { database } from "../Utils/firebase-Config";

export const Default_Image_Add = "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Default_Image_Add%2Fadd.png?alt=media&token=ba429539-8f23-4cb2-b2c0-b08347ed63a9"


export const createProduct = (data) => {
    var db_Product = ref(database, 'products/');
    const newReference = push(db_Product);
    db_Product = ref(database, 'products/' + newReference.key);
    var product = {
        productID: newReference.key,
        Name: data.Name,
        Price: Number(data.Price),
        Type: data.Type,
        Desc: data.Desc,
        PhotoUrl1: data.PhotoUrl1,
        PhotoUrl2: data.PhotoUrl2,
        PhotoUrl3: data.PhotoUrl3,
        Timestamp: Date.now()
    };
    set(db_Product, product)
};
export const updateProduct = (data) => {
    var db_Product = ref(database, 'products/');
    db_Product = ref(database, 'products/' + data.productID);
    var product = {
        productID: data.productID,
        Name: data.Name,
        Price: Number(data.Price),
        Type: data.Type,
        Desc: data.Desc,
        PhotoUrl1: data.PhotoUrl1,
        PhotoUrl2: data.PhotoUrl2,
        PhotoUrl3: data.PhotoUrl3,
        Timestamp: Date.now(),
    };
    set(db_Product, product)
}
export const removeProduct = (id) => {
    var db_Product = ref(database, 'products/' + id);
    set(db_Product, null)
}