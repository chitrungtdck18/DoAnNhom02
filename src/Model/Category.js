import { database } from '../Utils/firebase-Config';
import { ref, onValue } from 'firebase/database';
export var arrayCategory = []
export const getCategory = async () => {
    return new Promise((resolve, reject) => {
        const db_Category = ref(database, "Category");
        onValue(db_Category, (snapshot) => {
            resolve(snapshot.val())
            arrayCategory = snapshot.val()
        }).catch(err => console.log(err));
    });


}
export const getlistCategory = async () => {
    try {
        const list = await getCategory()
        arrayCategory = list
    } catch (error) {
        console.log(error)
    }
}



