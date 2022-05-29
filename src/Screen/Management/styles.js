import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
    viewdropdown: {
        marginVertical: 20,
        width: (windowWidth - 30) / 2,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 10,
        zIndex: 500,
        borderRadius: 10
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: Colors.primary,
        borderColor: Colors.primary,
        fontWeight: '500',
        width: '80%',

    },
    viewinputSearch: {
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: Colors.primary,
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
        backgroundColor: Colors.primary,
        height: 170,
    },
    touchIconMenu: {
        padding: 20,
    },
    header: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameapp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.second,
        textAlign: 'center',
        padding: 20,
    },
    safeareaview: {
        flex: 1,
        backgroundColor:"#fff"
      
    },
    containerStyle: {
        flexGrow: 1, flexShrink: 1
    },
    textInputProps: {
        color: 'black',
        backgroundColor: Colors.second,
        paddingLeft: 18,
        borderRadius: 10,
    },

    rightButtonsContainerStyle: {
        borderRadius: 10,
        backgroundColor: "#FFFFFF"
    },
    view_list:{
        flex:4
    }
  
})