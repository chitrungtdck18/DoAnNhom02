import { Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    viewdropdown: {
        marginVertical: 20,
        width: (windowWidth - 30) / 2,
        borderWidth: 1,
        borderColor: '#BD8522',
        borderRadius: 10,
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: '#BD8522',
        borderColor: '#BD8522',
        fontWeight: '500',
        width: '80%',

    },
    viewinputSearch: {
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#BD8522',
        borderRadius: 10,
        width: (windowWidth - 30) / 2,
        marginVertical: 20
    },
    imglist: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    viewimg: {
        width: 100,
        height: 80,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    viewitem: {
        marginHorizontal: 10,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#BD8522',
        height: 170,
    },
    touchIconMenu: {
        padding: 20,
    },
    header: {
        backgroundColor: '#BD8522',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameapp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 20,
    },
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})