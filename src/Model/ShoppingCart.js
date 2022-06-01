import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { database } from "../Utils/firebase-Config";


export const createCart = (data, userid) => {
    var db_Cart = ref(database, 'shoppingCart/' + userid + "/" + data.productID);
    var Cart = {
        productID: data.productID,
        Name: data.Name,
        Price: Number(data.Price),
        Type: data.Type,
        Desc: data.Desc,
        PhotoUrl1: data.PhotoUrl1,
        PhotoUrl2: data.PhotoUrl2,
        PhotoUrl3: data.PhotoUrl3,
        Timestamp: Date.now(),
        Quantity: 1
    };
    set(db_Cart, Cart)
};
export const addQuantity = (data, userid) => {
    var db_Cart = ref(database, 'shoppingCart/' + userid + "/" + data.productID);
    var Cart = {
        productID: data.productID,
        Name: data.Name,
        Price: Number(data.Price),
        Type: data.Type,
        Desc: data.Desc,
        PhotoUrl1: data.PhotoUrl1,
        PhotoUrl2: data.PhotoUrl2,
        PhotoUrl3: data.PhotoUrl3,
        Timestamp: Date.now(),
        Quantity: data.Quantity + 1
    };
    set(db_Cart, Cart)
}
export const subQuantity = (data, userid) => {
    if (data.Quantity > 1) {
        var db_Cart = ref(database, 'shoppingCart/' + userid + "/" + data.productID);
        var Cart = {
            productID: data.productID,
            Name: data.Name,
            Price: Number(data.Price),
            Type: data.Type,
            Desc: data.Desc,
            PhotoUrl1: data.PhotoUrl1,
            PhotoUrl2: data.PhotoUrl2,
            PhotoUrl3: data.PhotoUrl3,
            Timestamp: Date.now(),
            Quantity: data.Quantity - 1
        };
        set(db_Cart, Cart)
    }
    else {
        alert("cant not be lower than 1!!")
    }

}
export const removeCart = (id, userid) => {
    var db_Product = ref(database, 'shoppingCart/' + userid + "/" + id);
    set(db_Product, null)
}