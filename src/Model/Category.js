import { database } from '../Utils/firebase-Config';
export var arrayCategory = []
export const getCategory = async () => {
    return new Promise((resolve, reject) => {
        database.ref("Category")
            .on('value', snapshot => {
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



