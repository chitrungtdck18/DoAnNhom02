import { database } from '../Utils/firebase-Config';
export var arrayCategory = []
export const getCategory = async() => {
    const onValueChange = database.ref("Category")
        .on('value', snapshot => {
            arrayCategory = []
            arrayCategory =  snapshot.val();
           
        }).catch(err => console.log(err));
    return () => database().ref(`Category`).off('value', onValueChange);
}

